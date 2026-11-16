import { chromium } from "playwright";

async function inspectCards() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("https://b2bizz-wbs.framer.website/home-2", { waitUntil: "networkidle" });

  const cardRects = await page.evaluate(() => {
    const sec = Array.from(document.querySelectorAll("section"))[1];
    const links = Array.from(sec.querySelectorAll("a[href*='service/']"));
    return links.map(l => {
      const r = l.getBoundingClientRect();
      const style = window.getComputedStyle(l);
      return {
        text: l.querySelector("h3")?.innerText || l.innerText.slice(0, 30),
        w: Math.round(r.width),
        h: Math.round(r.height),
        top: Math.round(r.top + window.scrollY),
        left: Math.round(r.left),
        flexDir: style.flexDirection,
        display: style.display
      };
    });
  });

  console.log("Section 1 Cards Layout:", cardRects);
  await browser.close();
}

inspectCards().catch(console.error);
