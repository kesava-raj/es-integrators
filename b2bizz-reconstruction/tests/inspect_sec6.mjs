import { chromium } from "playwright";

async function inspectSec6() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("https://b2bizz-wbs.framer.website/home-2", { waitUntil: "networkidle" });

  const info = await page.evaluate(() => {
    const s = Array.from(document.querySelectorAll("section"))[6];
    const cards = Array.from(s.querySelectorAll("[data-framer-name]")).filter(c => {
      const r = c.getBoundingClientRect();
      return r.width > 250 && r.height > 150;
    });
    return {
      h2: s.querySelector("h2")?.innerText,
      cardCount: cards.length,
      cards: cards.slice(0, 4).map(c => ({
        name: c.getAttribute("data-framer-name"),
        w: Math.round(c.getBoundingClientRect().width),
        h: Math.round(c.getBoundingClientRect().height),
        text: c.innerText.slice(0, 80)
      }))
    };
  });

  console.log("Section 6 Endorsements info:", info);
  await browser.close();
}

inspectSec6().catch(console.error);
