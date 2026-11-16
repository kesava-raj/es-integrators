import { chromium } from "playwright";
import fs from "fs";
import path from "path";

async function inspectHome2() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  console.log("Navigating to https://b2bizz-wbs.framer.website/home-2...");
  await page.goto("https://b2bizz-wbs.framer.website/home-2", { waitUntil: "networkidle" });

  // Scroll down to trigger lazy loading / animations
  console.log("Triggering Framer hydration scroll...");
  const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < scrollHeight; y += 400) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(50);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);

  // Take screenshot
  const screenshotDir = "screenshots/home-2";
  fs.mkdirSync(screenshotDir, { recursive: true });
  await page.screenshot({ path: path.join(screenshotDir, "ref-home-2-1440.png"), fullPage: true });
  console.log("Screenshot saved to ref-home-2-1440.png");

  // Extract section metadata
  const data = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll("section, header, footer, [data-framer-name]"));
    
    // Get all top-level main sections inside the container
    const mainChildren = Array.from(document.body.querySelectorAll("main > div, #main > div, body > div:first-child > div"));
    
    // Find all primary section containers
    const sectionNodes = Array.from(document.querySelectorAll("section, footer"));
    
    const extractedSections = sectionNodes.map((s, idx) => {
      const rect = s.getBoundingClientRect();
      const style = window.getComputedStyle(s);
      const h1 = s.querySelector("h1");
      const h2 = s.querySelector("h2");
      const h3 = s.querySelector("h3");
      const heading = (h1 || h2 || h3)?.innerText?.trim() || null;
      const images = Array.from(s.querySelectorAll("img")).map(img => ({
        src: img.src,
        alt: img.alt,
        width: img.naturalWidth || img.clientWidth,
        height: img.naturalHeight || img.clientHeight
      }));
      const svgs = Array.from(s.querySelectorAll("svg")).length;
      const buttons = Array.from(s.querySelectorAll("button, a[href]"))
        .filter(b => b.innerText?.trim())
        .map(b => ({ text: b.innerText.trim(), href: b.getAttribute("href") }));

      return {
        idx,
        tag: s.tagName,
        heading,
        top: Math.round(rect.top + window.scrollY),
        height: Math.round(rect.height),
        paddingTop: style.paddingTop,
        paddingBottom: style.paddingBottom,
        bg: style.backgroundColor,
        images,
        svgCount: svgs,
        buttons: buttons.slice(0, 5),
        textSnippet: s.innerText.slice(0, 150).replace(/\n+/g, " ")
      };
    });

    // Also get all images on the page
    const allImages = Array.from(document.querySelectorAll("img")).map(img => ({
      src: img.src,
      alt: img.alt,
      width: img.naturalWidth || img.clientWidth,
      height: img.naturalHeight || img.clientHeight
    }));

    return {
      title: document.title,
      totalHeight: document.body.scrollHeight,
      sections: extractedSections,
      allImages
    };
  });

  fs.writeFileSync(path.join(screenshotDir, "ref_home_2_data.json"), JSON.stringify(data, null, 2));
  console.log(`Extracted ${data.sections.length} sections, totalHeight: ${data.totalHeight}px`);
  console.log("Sections summary:");
  data.sections.forEach(s => {
    console.log(`- [${s.idx}] <${s.tag}> H: ${s.height}px | Heading: "${s.heading}" | Pad: ${s.paddingTop}/${s.paddingBottom}`);
  });

  await browser.close();
}

inspectHome2().catch(console.error);
