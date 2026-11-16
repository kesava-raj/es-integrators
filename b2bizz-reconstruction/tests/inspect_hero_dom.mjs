import { chromium } from "playwright";

async function inspectHero() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("https://b2bizz-wbs.framer.website/", { waitUntil: "domcontentloaded", timeout: 35000 });
  await page.waitForTimeout(2000);

  const heroHTML = await page.evaluate(() => {
    const s = document.querySelector("section");
    return {
      text: s ? s.innerText : "none",
      children: Array.from(s ? s.children : []).map(c => ({
        tag: c.tagName,
        className: c.className,
        rect: c.getBoundingClientRect(),
        text: c.innerText.slice(0, 100),
      })),
    };
  });

  console.log("REF HERO STRUCTURE:", JSON.stringify(heroHTML, null, 2));
  await browser.close();
}

inspectHero().catch(console.error);
