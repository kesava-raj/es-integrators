import fs from "fs";
import path from "path";
import https from "https";

const data = JSON.parse(fs.readFileSync("screenshots/home-2/ref_home_2_data.json"));

// Collect all unique image URLs from all sections
const imgMap = new Map();

data.allImages.forEach(img => {
  const url = img.src.split("?")[0];
  const filename = url.split("/").pop();
  if (!imgMap.has(filename)) {
    imgMap.set(filename, {
      url: img.src,
      cleanUrl: url,
      filename,
      alt: img.alt,
      w: img.width,
      h: img.height
    });
  }
});

console.log(`Found ${imgMap.size} unique image assets on /home-2:`);

// Check public directory
const publicImagesDir = "public/images";
const publicIconsDir = "public/icons";
const existingImages = new Set(fs.readdirSync(publicImagesDir));
const existingIcons = new Set(fs.readdirSync(publicIconsDir));

const missing = [];

imgMap.forEach((meta, filename) => {
  const isSvg = filename.endsWith(".svg");
  const exists = isSvg ? existingIcons.has(filename) : existingImages.has(filename);
  if (!exists) {
    missing.push(meta);
  } else {
    // console.log(`  [EXISTS] ${filename}`);
  }
});

console.log(`\nAlready present: ${imgMap.size - missing.length}`);
console.log(`Missing: ${missing.length}`);

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on("finish", () => {
        stream.close();
        resolve();
      });
      stream.on("error", reject);
    }).on("error", reject);
  });
}

async function downloadMissing() {
  for (const m of missing) {
    const isSvg = m.filename.endsWith(".svg");
    const dest = path.join(isSvg ? publicIconsDir : publicImagesDir, m.filename);
    try {
      console.log(`Downloading ${m.cleanUrl} -> ${dest}...`);
      await downloadFile(m.cleanUrl, dest);
      console.log(`Downloaded ${m.filename}`);
    } catch (e) {
      console.error(`Failed to download ${m.cleanUrl}:`, e.message);
    }
  }
  console.log("All missing downloads complete!");
}

downloadMissing().catch(console.error);
