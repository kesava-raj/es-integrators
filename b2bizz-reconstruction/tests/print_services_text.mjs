import fs from "fs";

const sData = JSON.parse(fs.readFileSync("screenshots/services/ref_service_data.json"));
console.log("=== /service OVERVIEW SECTIONS ===");
sData.sections.forEach((s, idx) => {
  console.log(`\nSection ${idx}: "${s.heading}" (${s.height}px)`);
  console.log(`Padding: ${s.paddingTop}/${s.paddingBottom}`);
  console.log(`Text snippet:\n${s.fullText.slice(0, 200).replace(/\n+/g, " ")}`);
  console.log(`Images (${s.images.length}):`, s.images.map(img => img.src.split("?")[0].split("/").pop()));
});

const dData = JSON.parse(fs.readFileSync("screenshots/services/ref_service_detail_data.json"));
console.log("\n=== /service/[slug] DETAIL SECTIONS ===");
dData.sections.forEach((s, idx) => {
  console.log(`\nSection ${idx}: "${s.heading}" (${s.height}px)`);
  console.log(`Padding: ${s.paddingTop}/${s.paddingBottom}`);
  console.log(`Text snippet:\n${s.fullText.slice(0, 200).replace(/\n+/g, " ")}`);
  console.log(`Images (${s.images.length}):`, s.images.map(img => img.src.split("?")[0].split("/").pop()));
});
