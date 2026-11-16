import { chromium } from "playwright";

async function inspectSec3() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("https://b2bizz-wbs.framer.website/home-2", { waitUntil: "networkidle" });

  const info = await page.evaluate(() => {
    const s = Array.from(document.querySelectorAll("section"))[3];
    const cards = Array.from(s.querySelectorAll("[data-framer-name]")).filter(el => {
      const r = el.getBoundingClientRect();
      return r.width > 300 && r.height > 200;
    });
    return {
      h2: s.querySelector("h2")?.innerText,
      cardCount: cards.length,
      sampleCard: cards[0] ? {
        name: cards[0].getAttribute("data-framer-name"),
        w: Math.round(cards[0].getBoundingClientRect().width),
        h: Math.round(cards[0].getBoundingClientRect().height),
        tag: cards[0].tagName,
        text: cards[0].innerText.slice(0, 100)
      } : null,
      buttons: Array.from(s.querySelectorAll("button, [role='button']")).map(b => b.innerText || b.getAttribute("aria-label"))
    };
  });

  console.log("Section 3 Sectors info:", info);
  await browser.close();
}

inspectSec3().catch(console.error);
