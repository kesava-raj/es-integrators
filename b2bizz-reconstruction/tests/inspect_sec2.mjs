import { chromium } from "playwright";

async function inspectSec2() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("https://b2bizz-wbs.framer.website/home-2", { waitUntil: "networkidle" });

  const sec2 = await page.evaluate(() => {
    const s = Array.from(document.querySelectorAll("section"))[2];
    return {
      html: s.innerHTML.slice(0, 800),
      h2: s.querySelector("h2")?.innerText,
      childrenCount: s.children.length,
      rects: Array.from(s.children).map(c => ({
        tag: c.tagName,
        w: Math.round(c.getBoundingClientRect().width),
        h: Math.round(c.getBoundingClientRect().height)
      }))
    };
  });

  console.log("Section 2 info:", sec2);
  await browser.close();
}

inspectSec2().catch(console.error);
