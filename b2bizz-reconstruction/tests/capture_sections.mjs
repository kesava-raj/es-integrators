import { chromium } from "playwright";
import fs from "fs";
import path from "path";

async function captureSideBySideSections() {
  const browser = await chromium.launch({ headless: true });
  const outDir = path.resolve("./screenshots/visual-qa/sections");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const refPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await refPage.goto("https://b2bizz-wbs.framer.website/", { waitUntil: "domcontentloaded", timeout: 35000 });
  await refPage.waitForTimeout(2000);

  // Trigger hydration
  const refHeight = await refPage.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < refHeight; y += 400) {
    await refPage.evaluate(y => window.scrollTo(0, y), y);
    await refPage.waitForTimeout(60);
  }
  await refPage.evaluate(() => window.scrollTo(0, 0));
  await refPage.waitForTimeout(1000);

  const localPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await localPage.goto("http://localhost:3001/", { waitUntil: "networkidle", timeout: 25000 });
  await localPage.waitForTimeout(2000);

  const localHeight = await localPage.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < localHeight; y += 400) {
    await localPage.evaluate(y => window.scrollTo(0, y), y);
    await localPage.waitForTimeout(60);
  }
  await localPage.evaluate(() => window.scrollTo(0, 0));
  await localPage.waitForTimeout(1000);

  const sectionSpecs = [
    { name: "01-hero", refSelector: "section:nth-of-type(1)", localSelector: "main > section:nth-of-type(1)" },
    { name: "02-marquee", refSelector: "section:nth-of-type(2)", localSelector: "main > section:nth-of-type(2)" },
    { name: "03-about", refSelector: "section:nth-of-type(3)", localSelector: "main > section:nth-of-type(3)" },
    { name: "04-industries", refSelector: "section:nth-of-type(4)", localSelector: "main > section:nth-of-type(4)" },
    { name: "05-valueprops", refSelector: "section:nth-of-type(6)", localSelector: "main > section:nth-of-type(5)" },
    { name: "06-testimonial", refSelector: "section:nth-of-type(7)", localSelector: "main > section:nth-of-type(6)" },
    { name: "07-services", refSelector: "section:nth-of-type(8)", localSelector: "main > section:nth-of-type(7)" },
    { name: "08-metrics", refSelector: "section:nth-of-type(9)", localSelector: "main > section:nth-of-type(8)" },
    { name: "09-casestudies", refSelector: "section:nth-of-type(10)", localSelector: "main > section:nth-of-type(9)" },
    { name: "10-methodology", refSelector: "section:nth-of-type(12)", localSelector: "main > section:nth-of-type(10)" },
    { name: "11-ctabanner", refSelector: "section:nth-of-type(13)", localSelector: "main > section:nth-of-type(11)" },
    { name: "12-footer", refSelector: "footer", localSelector: "footer" },
  ];

  for (const s of sectionSpecs) {
    try {
      const refEl = await refPage.locator(s.refSelector).first();
      if (await refEl.count() > 0) {
        await refEl.scrollIntoViewIfNeeded();
        await refPage.waitForTimeout(200);
        await refEl.screenshot({ path: path.join(outDir, "ref-" + s.name + ".png") });
        console.log("Saved ref-" + s.name);
      } else {
        console.log("Ref selector not found for " + s.name);
      }
    } catch (e) {
      console.log("Error ref " + s.name + ":", e.message);
    }

    try {
      const localEl = await localPage.locator(s.localSelector).first();
      if (await localEl.count() > 0) {
        await localEl.scrollIntoViewIfNeeded();
        await localPage.waitForTimeout(200);
        await localEl.screenshot({ path: path.join(outDir, "local-" + s.name + ".png") });
        console.log("Saved local-" + s.name);
      } else {
        console.log("Local selector not found for " + s.name);
      }
    } catch (e) {
      console.log("Error local " + s.name + ":", e.message);
    }
  }

  await browser.close();
  console.log("Completed section captures!");
}

captureSideBySideSections().catch(console.error);
