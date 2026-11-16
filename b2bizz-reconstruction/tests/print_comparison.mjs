import fs from "fs";

const refData = JSON.parse(fs.readFileSync("screenshots/visual-qa/ref_sections.json"));
const qaData = JSON.parse(fs.readFileSync("screenshots/visual-qa/visual_qa_report_metrics.json"));

console.log("=== LOCAL SECTIONS (1440px) ===");
qaData.desktop_1440.localMetrics.sections.forEach(s => {
  console.log(`[Local ${s.idx}] <${s.tag}> ${s.heading || "No heading"} | H: ${s.height}px | Pad: ${s.paddingTop}/${s.paddingBottom}`);
});

console.log("\n=== REFERENCE SECTIONS (1440px) ===");
refData.slice(1).forEach(s => {
  console.log(`[Ref ${s.index}] <${s.tag}> ${s.title} | H: ${s.height}px | Imgs: ${s.imageCount}`);
});
