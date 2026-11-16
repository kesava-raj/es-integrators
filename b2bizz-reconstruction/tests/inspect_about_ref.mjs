import { chromium } from "playwright";
import fs from "fs";
import path from "path";

async function inspectAbout() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  console.log("Navigating to https://b2bizz-wbs.framer.website/about...");
  await page.goto("https://b2bizz-wbs.framer.website/about", { waitUntil: "networkidle" });

  // Hydrate Framer
  const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < scrollHeight; y += 400) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(40);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);

  // Take screenshot
  const screenshotDir = "screenshots/about";
  fs.mkdirSync(screenshotDir, { recursive: true });
  await page.screenshot({ path: path.join(screenshotDir, "ref-about-1440.png"), fullPage: true });
  console.log("Screenshot saved to ref-about-1440.png");

  // Extract sections
  const data = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll("section, footer"));
    return {
      title: document.title,
      totalHeight: document.body.scrollHeight,
      sections: sections.map((s, idx) => {
        const r = s.getBoundingClientRect();
        const style = window.getComputedStyle(s);
        const h1 = s.querySelector("h1");
        const h2 = s.querySelector("h2");
        const heading = (h1 || h2)?.innerText.trim() || null;
        const images = Array.from(s.querySelectorAll("img")).map(img => ({
          src: img.src,
          alt: img.alt,
          w: img.clientWidth,
          h: img.clientHeight
        }));
        return {
          idx,
          tag: s.tagName,
          heading,
          height: Math.round(r.height),
          paddingTop: style.paddingTop,
          paddingBottom: style.paddingBottom,
          fullText: s.innerText,
          images
        };
      })
    };
  });

  fs.writeFileSync(path.join(screenshotDir, "ref_about_data.json"), JSON.stringify(data, null, 2));
  console.log(`Extracted ${data.sections.length} sections for /about, totalHeight: ${data.totalHeight}px`);
  data.sections.forEach(s => {
    console.log(`- [${s.idx}] <${s.tag}> H: ${s.height}px | "${s.heading}" | Pad: ${s.paddingTop}/${s.paddingBottom} | Imgs: ${s.images.length}`);
  });

  await browser.close();
}

inspectAbout().catch(console.error);
