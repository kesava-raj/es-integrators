import { chromium } from "playwright";
import fs from "fs";

async function detailedInspect() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto("https://b2bizz-wbs.framer.website/home-2", { waitUntil: "networkidle" });
  
  // Hydrate Framer
  const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < scrollHeight; y += 400) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(40);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);

  const sectionDetails = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll("section"));
    return sections.map((s, idx) => {
      const h1 = s.querySelector("h1");
      const h2 = s.querySelector("h2");
      const h3s = Array.from(s.querySelectorAll("h3")).map(h => h.innerText.trim());
      const p = Array.from(s.querySelectorAll("p")).map(p => p.innerText.trim()).filter(Boolean);
      const links = Array.from(s.querySelectorAll("a")).map(a => ({
        href: a.getAttribute("href"),
        text: a.innerText.trim().replace(/\n+/g, " ")
      })).filter(a => a.text);

      const style = window.getComputedStyle(s);
      const rect = s.getBoundingClientRect();

      // Heading style
      const headElem = h1 || h2;
      const headStyle = headElem ? window.getComputedStyle(headElem) : null;

      // Extract all card-like divs
      const cards = Array.from(s.querySelectorAll("[data-framer-name]")).map(c => ({
        name: c.getAttribute("data-framer-name"),
        width: Math.round(c.getBoundingClientRect().width),
        height: Math.round(c.getBoundingClientRect().height)
      })).filter(c => c.width > 200 && c.height > 100);

      return {
        idx,
        heading: (h1 || h2)?.innerText.trim() || null,
        headingTag: (h1 || h2)?.tagName || null,
        headingStyles: headStyle ? {
          fontSize: headStyle.fontSize,
          fontWeight: headStyle.fontWeight,
          lineHeight: headStyle.lineHeight,
          color: headStyle.color
        } : null,
        h3s,
        rect: {
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          top: Math.round(rect.top + window.scrollY)
        },
        padding: `${style.paddingTop} / ${style.paddingBottom}`,
        paragraphs: p.slice(0, 6),
        links: links.slice(0, 10),
        images: Array.from(s.querySelectorAll("img")).map(img => ({
          src: img.src,
          alt: img.alt,
          w: img.clientWidth,
          h: img.clientHeight
        }))
      };
    });
  });

  fs.writeFileSync("screenshots/home-2/detailed_sections.json", JSON.stringify(sectionDetails, null, 2));
  console.log(`Saved detailed info for ${sectionDetails.length} sections to detailed_sections.json`);

  await browser.close();
}

detailedInspect().catch(console.error);
