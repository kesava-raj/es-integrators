import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const VIEWPORTS = [
  { name: "desktop_1440", width: 1440, height: 900 },
  { name: "tablet_768", width: 768, height: 1024 },
  { name: "mobile_375", width: 375, height: 812 },
];

async function compareAbout() {
  const browser = await chromium.launch({ headless: true });
  const results = {};

  const screenshotDir = "screenshots/about";
  fs.mkdirSync(screenshotDir, { recursive: true });

  for (const vp of VIEWPORTS) {
    console.log(`\nTesting viewport: ${vp.name} (${vp.width}x${vp.height})...`);
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });

    await page.goto("http://localhost:3001/about", { waitUntil: "networkidle" });
    await page.waitForTimeout(600);

    const localMetrics = await page.evaluate(() => {
      const scrollWidth = document.documentElement.scrollWidth;
      const clientWidth = document.documentElement.clientWidth;
      const totalHeight = document.body.scrollHeight;
      const hasHorizontalScroll = scrollWidth > clientWidth;

      const h1 = document.querySelector("h1");
      const h1Styles = h1 ? {
        fontSize: window.getComputedStyle(h1).fontSize,
        lineHeight: window.getComputedStyle(h1).lineHeight,
        color: window.getComputedStyle(h1).color,
      } : null;

      const sections = Array.from(document.querySelectorAll("section, footer")).map((s, idx) => {
        const r = s.getBoundingClientRect();
        const style = window.getComputedStyle(s);
        const heading = (s.querySelector("h1") || s.querySelector("h2"))?.innerText.trim().slice(0, 50) || null;
        return {
          idx,
          tag: s.tagName,
          heading,
          height: Math.round(r.height),
          paddingTop: style.paddingTop,
          paddingBottom: style.paddingBottom,
        };
      });

      return {
        totalHeight,
        scrollWidth,
        clientWidth,
        hasHorizontalScroll,
        h1Styles,
        sections,
      };
    });

    const localScreenshotPath = path.join(screenshotDir, `local-${vp.name}-full.png`);
    await page.screenshot({ path: localScreenshotPath, fullPage: true });
    console.log(`  Saved ${localScreenshotPath}`);

    results[vp.name] = {
      viewport: vp,
      localMetrics,
    };

    await page.close();
  }

  const refData = JSON.parse(fs.readFileSync(path.join(screenshotDir, "ref_about_data.json")));

  console.log("\n=================== ABOUT VISUAL QA COMPARISON (1440px) ===================");
  console.log(`Local Height: ${results.desktop_1440.localMetrics.totalHeight}px`);
  console.log(`Reference Height: ${refData.totalHeight}px`);
  const delta = results.desktop_1440.localMetrics.totalHeight - refData.totalHeight;
  const pct = ((delta / refData.totalHeight) * 100).toFixed(1);
  console.log(`Delta: ${delta > 0 ? "+" : ""}${delta}px (${pct}%)`);
  console.log(`Zero Horizontal Overflow: ${!results.desktop_1440.localMetrics.hasHorizontalScroll ? "PASS" : "FAIL"}`);

  console.log("\n--- Section by Section Breakdown ---");
  results.desktop_1440.localMetrics.sections.forEach((ls, i) => {
    const rs = refData.sections[i];
    const refH = rs ? rs.height : "N/A";
    console.log(`Section ${i}: [${ls.tag}] "${ls.heading || "No heading"}" | Local: ${ls.height}px vs Ref: ${refH}px`);
  });

  fs.writeFileSync(path.join(screenshotDir, "about_qa_report.json"), JSON.stringify({ results, refData }, null, 2));

  await browser.close();
}

compareAbout().catch(console.error);
