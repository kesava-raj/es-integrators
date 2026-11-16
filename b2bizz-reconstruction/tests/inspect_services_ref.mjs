import { chromium } from "playwright";
import fs from "fs";
import path from "path";

async function inspectServices() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });

  // 1. Inspect /service (Overview)
  console.log("Navigating to https://b2bizz-wbs.framer.website/service...");
  const page = await context.newPage();
  await page.goto("https://b2bizz-wbs.framer.website/service", { waitUntil: "networkidle" });

  // Hydrate Framer
  const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < scrollHeight; y += 400) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(40);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);

  const screenshotDir = "screenshots/services";
  fs.mkdirSync(screenshotDir, { recursive: true });
  await page.screenshot({ path: path.join(screenshotDir, "ref-service-1440.png"), fullPage: true });

  const serviceData = await page.evaluate(() => {
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

  fs.writeFileSync(path.join(screenshotDir, "ref_service_data.json"), JSON.stringify(serviceData, null, 2));
  console.log(`Extracted ${serviceData.sections.length} sections for /service, totalHeight: ${serviceData.totalHeight}px`);
  serviceData.sections.forEach(s => {
    console.log(`- [${s.idx}] <${s.tag}> H: ${s.height}px | "${s.heading}" | Pad: ${s.paddingTop}/${s.paddingBottom}`);
  });

  // 2. Inspect /service/b2b-website-design-development (Detail Page)
  console.log("\nNavigating to https://b2bizz-wbs.framer.website/service/b2b-website-design-development...");
  const detailPage = await context.newPage();
  await detailPage.goto("https://b2bizz-wbs.framer.website/service/b2b-website-design-development", { waitUntil: "networkidle" });

  const detailScrollHeight = await detailPage.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < detailScrollHeight; y += 400) {
    await detailPage.evaluate((top) => window.scrollTo(0, top), y);
    await detailPage.waitForTimeout(40);
  }
  await detailPage.evaluate(() => window.scrollTo(0, 0));
  await detailPage.waitForTimeout(1000);

  await detailPage.screenshot({ path: path.join(screenshotDir, "ref-service-detail-1440.png"), fullPage: true });

  const detailData = await detailPage.evaluate(() => {
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

  fs.writeFileSync(path.join(screenshotDir, "ref_service_detail_data.json"), JSON.stringify(detailData, null, 2));
  console.log(`Extracted ${detailData.sections.length} sections for detail page, totalHeight: ${detailData.totalHeight}px`);
  detailData.sections.forEach(s => {
    console.log(`- [${s.idx}] <${s.tag}> H: ${s.height}px | "${s.heading}" | Pad: ${s.paddingTop}/${s.paddingBottom}`);
  });

  await browser.close();
}

inspectServices().catch(console.error);
