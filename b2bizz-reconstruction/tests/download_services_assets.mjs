import fs from "fs";
import path from "path";
import https from "https";

const sData = JSON.parse(fs.readFileSync("screenshots/services/ref_service_data.json"));
const dData = JSON.parse(fs.readFileSync("screenshots/services/ref_service_detail_data.json"));

const allImgs = [...sData.sections, ...dData.sections].flatMap(s => s.images);

const imgMap = new Map();
allImgs.forEach(img => {
  const cleanUrl = img.src.split("?")[0];
  const filename = cleanUrl.split("/").pop();
  if (!imgMap.has(filename)) {
    imgMap.set(filename, { cleanUrl, filename });
  }
});

console.log(`Found ${imgMap.size} unique image assets across services routes`);

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
  }
});

console.log(`Already present: ${imgMap.size - missing.length}, Missing: ${missing.length}`);

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
      console.error(`Failed ${m.cleanUrl}:`, e.message);
    }
  }
  console.log("All missing service assets downloaded!");
}

downloadMissing().catch(console.error);
