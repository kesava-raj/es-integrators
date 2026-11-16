import fs from "fs";

const d = JSON.parse(fs.readFileSync("screenshots/home-2/ref_home_2_data.json"));

d.sections.forEach((s, idx) => {
  console.log(`\n=================== SECTION ${idx} ===================`);
  console.log(`HEADING: ${s.heading}`);
  console.log(`RAW TEXT:\n${s.textSnippet}`);
});
