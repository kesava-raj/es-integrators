import fs from "fs";

const sections = JSON.parse(fs.readFileSync("screenshots/home-2/detailed_sections.json"));

sections.forEach(s => {
  console.log(`\n======================================================`);
  console.log(`SECTION ${s.idx}: <${s.headingTag || "NO_TAG"}> "${s.heading}"`);
  console.log(`Height: ${s.rect.height}px | Padding: ${s.padding}`);
  if (s.headingStyles) {
    console.log(`Heading styles: size=${s.headingStyles.fontSize}, weight=${s.headingStyles.fontWeight}, color=${s.headingStyles.color}`);
  }
  if (s.h3s.length > 0) {
    console.log(`H3s (${s.h3s.length}):`, s.h3s.slice(0, 6));
  }
  console.log(`Paragraphs (${s.paragraphs.length}):`, s.paragraphs.slice(0, 3));
  console.log(`Links (${s.links.length}):`, s.links.map(l => `${l.text} -> ${l.href}`).slice(0, 5));
  console.log(`Images (${s.images.length}):`, s.images.map(img => `${img.src.split("?")[0].split("/").pop()} [${img.w}x${img.h}]`).slice(0, 6));
});
