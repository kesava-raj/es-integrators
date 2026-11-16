import { chromium } from "playwright";
import fs from "fs";

async function inspectRef() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("https://b2bizz-wbs.framer.website/", { waitUntil: "domcontentloaded", timeout: 35000 });
  await page.waitForTimeout(2000);

  // Scroll to trigger all elements
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < h; y += 400) {
    await page.evaluate(y => window.scrollTo(0, y), y);
    await page.waitForTimeout(50);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);

  const sectionsInfo = await page.evaluate(() => {
    const list = [];
    document.querySelectorAll("section").forEach((sec, idx) => {
      const rect = sec.getBoundingClientRect();
      const style = window.getComputedStyle(sec);
      const headings = Array.from(sec.querySelectorAll("h1, h2, h3, h4, h5, h6")).map(el => ({
        tag: el.tagName,
        text: el.innerText.trim(),
        fontSize: window.getComputedStyle(el).fontSize,
        lineHeight: window.getComputedStyle(el).lineHeight,
      }));
      const images = Array.from(sec.querySelectorAll("img")).map(img => ({
        src: img.src,
        alt: img.alt,
        width: img.naturalWidth || img.width,
        height: img.naturalHeight || img.height,
        renderedWidth: Math.round(img.getBoundingClientRect().width),
        renderedHeight: Math.round(img.getBoundingClientRect().height),
      }));
      list.push({
        idx,
        top: Math.round(rect.top + window.scrollY),
        height: Math.round(rect.height),
        width: Math.round(rect.width),
        paddingTop: style.paddingTop,
        paddingBottom: style.paddingBottom,
        display: style.display,
        flexDirection: style.flexDirection,
        justifyContent: style.justifyContent,
        alignItems: style.alignItems,
        gap: style.gap,
        headings,
        imagesCount: images.length,
        images: images.slice(0, 5),
        textSnippet: sec.innerText.replace(/\s+/g, " ").slice(0, 200),
      });
    });
    return list;
  });

  console.log("Found", sectionsInfo.length, "sections in Reference:");
  sectionsInfo.forEach((s, i) => {
    console.log(`\n--- [Section ${i}] Top: ${s.top}px, Height: ${s.height}px, Padding: ${s.paddingTop} / ${s.paddingBottom}`);
    console.log(`Text: ${s.textSnippet}`);
    if (s.headings.length) console.log(`Headings:`, s.headings);
    if (s.images.length) console.log(`Images:`, s.images);
  });

  fs.writeFileSync("./screenshots/visual-qa/ref_detailed_sections.json", JSON.stringify(sectionsInfo, null, 2));
  await browser.close();
}

inspectRef().catch(console.error);
