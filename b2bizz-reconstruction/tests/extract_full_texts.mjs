import { chromium } from "playwright";
import fs from "fs";

async function extractFullTexts() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("https://b2bizz-wbs.framer.website/home-2", { waitUntil: "networkidle" });

  const fullData = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll("section"));
    return sections.map((s, idx) => ({
      idx,
      heading: (s.querySelector("h1") || s.querySelector("h2"))?.innerText.trim() || null,
      fullText: s.innerText
    }));
  });

  fs.writeFileSync("screenshots/home-2/full_section_texts.json", JSON.stringify(fullData, null, 2));
  console.log("Full section texts saved!");
  await browser.close();
}

extractFullTexts().catch(console.error);
