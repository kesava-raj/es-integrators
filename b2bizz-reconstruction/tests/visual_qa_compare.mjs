import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const screenshotDir = path.resolve("./screenshots/visual-qa");
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

async function runDetailedVisualQA() {
  console.log("=== Comprehensive Visual QA: Comparing Local vs Ref at 1440px, 768px, 375px ===");
  const browser = await chromium.launch({ headless: true });

  const viewports = [
    { name: "desktop_1440", width: 1440, height: 900 },
    { name: "tablet_768", width: 768, height: 1024 },
    { name: "mobile_375", width: 375, height: 800 },
  ];

  const results = {};

  for (const vp of viewports) {
    console.log(`\nTesting Viewport: ${vp.name} (${vp.width}x${vp.height})...`);

    // 1. Local Capture with Full Page Scroll Hydration
    const localPage = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await localPage.goto("http://localhost:3001/", { waitUntil: "networkidle", timeout: 25000 });
    await localPage.waitForTimeout(1500);

    const localHeight = await localPage.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < localHeight; y += 400) {
      await localPage.evaluate(y => window.scrollTo(0, y), y);
      await localPage.waitForTimeout(40);
    }
    await localPage.evaluate(() => window.scrollTo(0, 0));
    await localPage.waitForTimeout(800);

    const localMetrics = await localPage.evaluate(() => {
      const sections = Array.from(document.querySelectorAll("section, header, footer")).map((s, idx) => {
        const cs = window.getComputedStyle(s);
        const rect = s.getBoundingClientRect();
        const heading = s.querySelector("h1, h2, h3")?.innerText?.trim();
        return {
          idx,
          tag: s.tagName,
          heading: heading ? heading.slice(0, 50) : null,
          height: Math.round(rect.height),
          paddingTop: cs.paddingTop,
          paddingBottom: cs.paddingBottom,
        };
      });

      const h1 = document.querySelector("h1");
      const h1Styles = h1 ? {
        fontSize: window.getComputedStyle(h1).fontSize,
        lineHeight: window.getComputedStyle(h1).lineHeight,
        letterSpacing: window.getComputedStyle(h1).letterSpacing,
        color: window.getComputedStyle(h1).color,
      } : null;

      return {
        totalHeight: Math.round(document.documentElement.scrollHeight),
        scrollWidth: document.documentElement.scrollWidth,
        h1Styles,
        sections,
      };
    });

    const localFull = path.join(screenshotDir, `local-${vp.name}-full.png`);
    await localPage.screenshot({ path: localFull, fullPage: true });

    const localHero = path.join(screenshotDir, `local-${vp.name}-hero.png`);
    await localPage.evaluate(() => window.scrollTo(0, 0));
    await localPage.waitForTimeout(300);
    await localPage.screenshot({ path: localHero });

    // 2. Reference Capture with Full Page Scroll Hydration
    let refMetrics = null;
    try {
      const refPage = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
      await refPage.goto("https://b2bizz-wbs.framer.website/", { waitUntil: "domcontentloaded", timeout: 35000 });
      await refPage.waitForTimeout(2000);

      const refHeight = await refPage.evaluate(() => document.documentElement.scrollHeight);
      for (let y = 0; y < refHeight; y += 400) {
        await refPage.evaluate(y => window.scrollTo(0, y), y);
        await refPage.waitForTimeout(40);
      }
      await refPage.evaluate(() => window.scrollTo(0, 0));
      await refPage.waitForTimeout(800);

      refMetrics = await refPage.evaluate(() => {
        const sections = Array.from(document.querySelectorAll("section, header, footer")).map((s, idx) => {
          const cs = window.getComputedStyle(s);
          const rect = s.getBoundingClientRect();
          const heading = s.querySelector("h1, h2, h3")?.innerText?.trim();
          return {
            idx,
            tag: s.tagName,
            heading: heading ? heading.slice(0, 50) : null,
            height: Math.round(rect.height),
            paddingTop: cs.paddingTop,
            paddingBottom: cs.paddingBottom,
          };
        });

        const h1 = document.querySelector("h1");
        const h1Styles = h1 ? {
          fontSize: window.getComputedStyle(h1).fontSize,
          lineHeight: window.getComputedStyle(h1).lineHeight,
          letterSpacing: window.getComputedStyle(h1).letterSpacing,
          color: window.getComputedStyle(h1).color,
        } : null;

        return {
          totalHeight: Math.round(document.documentElement.scrollHeight),
          scrollWidth: document.documentElement.scrollWidth,
          h1Styles,
          sections,
        };
      });

      const refFull = path.join(screenshotDir, `ref-${vp.name}-full.png`);
      await refPage.screenshot({ path: refFull, fullPage: true });

      const refHero = path.join(screenshotDir, `ref-${vp.name}-hero.png`);
      await refPage.evaluate(() => window.scrollTo(0, 0));
      await refPage.waitForTimeout(300);
      await refPage.screenshot({ path: refHero });

      await refPage.close();
    } catch (e) {
      console.log(`Could not capture reference for ${vp.name}: ${e.message}`);
    }

    await localPage.close();

    results[vp.name] = {
      viewport: vp,
      localMetrics,
      refMetrics,
      screenshots: {
        localFull,
        localHero,
        refFull: path.join(screenshotDir, `ref-${vp.name}-full.png`),
        refHero: path.join(screenshotDir, `ref-${vp.name}-hero.png`),
      },
    };

    console.log(`Results for ${vp.name}: LocalHeight=${localMetrics.totalHeight}px, RefHeight=${refMetrics?.totalHeight}px, LocalH1=${localMetrics.h1Styles?.fontSize}, RefH1=${refMetrics?.h1Styles?.fontSize}`);
  }

  await browser.close();

  fs.writeFileSync(
    path.join(screenshotDir, "visual_qa_report_metrics.json"),
    JSON.stringify(results, null, 2)
  );
  console.log("\nVisual QA complete! Saved to screenshots/visual-qa/visual_qa_report_metrics.json");
}

runDetailedVisualQA().catch(console.error);
