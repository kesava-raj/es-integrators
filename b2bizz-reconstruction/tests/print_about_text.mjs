import fs from "fs";

const d = JSON.parse(fs.readFileSync("screenshots/about/ref_about_data.json"));

d.sections.forEach((s, idx) => {
  console.log(`\n=================== ABOUT SECTION ${idx} ===================`);
  console.log(`HEADING: ${s.heading}`);
  console.log(`HEIGHT: ${s.height}px | PAD: ${s.paddingTop}/${s.paddingBottom}`);
  console.log(`FULL TEXT:\n${s.fullText}`);
});
