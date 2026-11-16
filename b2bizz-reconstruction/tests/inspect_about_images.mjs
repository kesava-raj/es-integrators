import fs from "fs";

const d = JSON.parse(fs.readFileSync("screenshots/about/ref_about_data.json"));

console.log("Section 0 Images:");
d.sections[0].images.forEach(img => {
  console.log(`- ${img.src.split("?")[0].split("/").pop()} [${img.w}x${img.h}] alt="${img.alt}"`);
});

console.log("\nSection 1 Images:");
d.sections[1].images.forEach(img => {
  console.log(`- ${img.src.split("?")[0].split("/").pop()} [${img.w}x${img.h}] alt="${img.alt}"`);
});

console.log("\nSection 3 Images:");
d.sections[3].images.forEach(img => {
  console.log(`- ${img.src.split("?")[0].split("/").pop()} [${img.w}x${img.h}] alt="${img.alt}"`);
});

console.log("\nSection 6 Team Images:");
d.sections[6].images.forEach(img => {
  console.log(`- ${img.src.split("?")[0].split("/").pop()} [${img.w}x${img.h}] alt="${img.alt}"`);
});
