import fs from "fs";

const d = JSON.parse(fs.readFileSync("screenshots/home-2/ref_home_2_data.json"));
console.log(`Title: ${d.title}`);
console.log(`Total Height: ${d.totalHeight}px`);

d.sections.forEach(s => {
  console.log(`\n========================================`);
  console.log(`Section ${s.idx}: "${s.heading}"`);
  console.log(`Height: ${s.height}px | Top: ${s.top}px`);
  console.log(`Padding: ${s.paddingTop} / ${s.paddingBottom}`);
  console.log(`Text: ${s.textSnippet.slice(0, 140)}...`);
  console.log(`Buttons (${s.buttons.length}):`, s.buttons.map(b => b.text.split("\n")[0]).slice(0, 4));
  console.log(`Image Count: ${s.images.length}`);
  if (s.images.length > 0 && s.images.length <= 8) {
    console.log("Images:", s.images.map(img => `${img.src.split("?")[0].split("/").pop()} (${img.alt || "no-alt"})`));
  }
});
