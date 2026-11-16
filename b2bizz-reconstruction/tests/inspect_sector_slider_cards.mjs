import { chromium } from "playwright";

async function inspectSliderCards() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("https://b2bizz-wbs.framer.website/home-2", { waitUntil: "networkidle" });

  const cards = await page.evaluate(() => {
    const sec = Array.from(document.querySelectorAll("section"))[3];
    // Find images and their parent card wrappers
    const imgs = Array.from(sec.querySelectorAll("img[alt='Slider Image']"));
    return imgs.slice(0, 3).map(img => {
      const card = img.closest("[data-framer-name='Card']") || img.parentElement?.parentElement;
      const r = card ? card.getBoundingClientRect() : img.getBoundingClientRect();
      return {
        cardWidth: Math.round(r.width),
        cardHeight: Math.round(r.height),
        text: card ? card.innerText : "",
        imgW: img.clientWidth,
        imgH: img.clientHeight
      };
    });
  });

  console.log("Slider cards:", cards);
  await browser.close();
}

inspectSliderCards().catch(console.error);
