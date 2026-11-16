import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const VIEWPORTS = [
  { name: "desktop_1440", width: 1440, height: 900 },
  { name: "tablet_768", width: 768, height: 1024 },
  { name: "mobile_375", width: 375, height: 812 },
];

async function compareServices() {
  const browser = await chromium.launch({ headless: true });
  const results = {};

  const screenshotDir = "screenshots/services";
  fs.mkdirSync(screenshotDir, { recursive: true });

  // 1. Compare /service (Index)
  console.log("=== Testing /service Index ===");
  for (const vp of VIEWPORTS) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto("http://localhost:3001/service", { waitUntil: "networkidle" });
    await page.waitForTimeout(600);

    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      totalHeight: document.body.scrollHeight,
      hasHorizontalScroll: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      sections: Array.from(document.querySelectorAll("section, footer")).map(s => {
        const r = s.getBoundingClientRect();
        const style = window.getComputedStyle(s);
        return {
          tag: s.tagName,
          heading: (s.querySelector("h1") || s.querySelector("h2"))?.innerText.trim().slice(0, 50) || null,
          height: Math.round(r.height),
          padTop: style.paddingTop,
          padBottom: style.paddingBottom,
        };
      })
    }));

    const shotPath = path.join(screenshotDir, `local-service-${vp.name}-full.png`);
    await page.screenshot({ path: shotPath, fullPage: true });
    console.log(`Saved ${shotPath}`);

    if (vp.name === "desktop_1440") {
      results.service = metrics;
    }
    await page.close();
  }

  // 2. Compare /service/b2b-website-design-development (Detail)
  console.log("\n=== Testing /service/b2b-website-design-development Detail ===");
  for (const vp of VIEWPORTS) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto("http://localhost:3001/service/b2b-website-design-development", { waitUntil: "networkidle" });
    await page.waitForTimeout(600);

    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      totalHeight: document.body.scrollHeight,
      hasHorizontalScroll: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      sections: Array.from(document.querySelectorAll("section, footer")).map(s => {
        const r = s.getBoundingClientRect();
        const style = window.getComputedStyle(s);
        return {
          tag: s.tagName,
          heading: (s.querySelector("h1") || s.querySelector("h2"))?.innerText.trim().slice(0, 50) || null,
          height: Math.round(r.height),
          padTop: style.paddingTop,
          padBottom: style.paddingBottom,
        };
      })
    }));

    const shotPath = path.join(screenshotDir, `local-service-detail-${vp.name}-full.png`);
    await page.screenshot({ path: shotPath, fullPage: true });
    console.log(`Saved ${shotPath}`);

    if (vp.name === "desktop_1440") {
      results.detail = metrics;
    }
    await page.close();
  }

  // Load references
  const refService = JSON.parse(fs.readFileSync(path.join(screenshotDir, "ref_service_data.json")));
  const refDetail = JSON.parse(fs.readFileSync(path.join(screenshotDir, "ref_service_detail_data.json")));

  console.log("\n=================== /service COMPARISON (1440px) ===================");
  console.log(`Local Height: ${results.service.totalHeight}px`);
  console.log(`Reference Height: ${refService.totalHeight}px`);
  const sDelta = results.service.totalHeight - refService.totalHeight;
  console.log(`Delta: ${sDelta > 0 ? "+" : ""}${sDelta}px (${((sDelta / refService.totalHeight) * 100).toFixed(1)}%)`);
  console.log(`Zero Overflow: ${!results.service.hasHorizontalScroll ? "PASS" : "FAIL"}`);

  results.service.sections.forEach((ls, i) => {
    const rs = refService.sections[i];
    console.log(`  Sec ${i}: [${ls.tag}] "${ls.heading || "No heading"}" | Local: ${ls.height}px vs Ref: ${rs ? rs.height : "N/A"}px`);
  });

  console.log("\n=================== /service/[slug] DETAIL COMPARISON (1440px) ===================");
  console.log(`Local Height: ${results.detail.totalHeight}px`);
  console.log(`Reference Height: ${refDetail.totalHeight}px`);
  const dDelta = results.detail.totalHeight - refDetail.totalHeight;
  console.log(`Delta: ${dDelta > 0 ? "+" : ""}${dDelta}px (${((dDelta / refDetail.totalHeight) * 100).toFixed(1)}%)`);
  console.log(`Zero Overflow: ${!results.detail.hasHorizontalScroll ? "PASS" : "FAIL"}`);

  results.detail.sections.forEach((ls, i) => {
    const rs = refDetail.sections[i];
    console.log(`  Sec ${i}: [${ls.tag}] "${ls.heading || "No heading"}" | Local: ${ls.height}px vs Ref: ${rs ? rs.height : "N/A"}px`);
  });

  fs.writeFileSync(path.join(screenshotDir, "services_qa_report.json"), JSON.stringify({ results, refService, refDetail }, null, 2));

  await browser.close();
}

compareServices().catch(console.error);
