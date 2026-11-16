import { chromium } from "playwright";

async function inspectDetails() {
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

  const res = await page.evaluate(() => {
    // 1. Services section
    const sH2 = Array.from(document.querySelectorAll("h2")).find(el => el.innerText.includes("Expert services"));
    const sSec = sH2 ? sH2.closest("section") : null;
    let services = [];
    if (sSec) {
      // Find cards inside
      const allDivs = Array.from(sSec.querySelectorAll("div, a"));
      services = allDivs.filter(d => {
        const t = d.innerText || "";
        return (t.includes("B2B website design") || t.includes("Brand identity") || t.includes("Digital transformation") || t.includes("SEO") || t.includes("Performance marketing")) && d.children.length > 1;
      }).map(d => {
        const r = d.getBoundingClientRect();
        return {
          tag: d.tagName,
          text: d.innerText.split("\n").filter(Boolean).slice(0, 3).join(" | "),
          width: Math.round(r.width),
          height: Math.round(r.height),
          left: Math.round(r.left),
          top: Math.round(r.top + window.scrollY),
        };
      });
    }

    // 2. Case study section
    const cH2 = Array.from(document.querySelectorAll("h2")).find(el => el.innerText.includes("Lead generation") || el.innerText.includes("Real cases") || el.innerText.includes("CRM & ERP"));
    const cSec = cH2 ? cH2.closest("section") : null;
    let caseStudies = [];
    if (cSec) {
      caseStudies = Array.from(cSec.querySelectorAll("img[alt*='Case']")).map(img => {
        const card = img.closest("div");
        const r = card.getBoundingClientRect();
        return {
          cardWidth: Math.round(r.width),
          cardHeight: Math.round(r.height),
          imgSrc: img.src,
          imgW: Math.round(img.getBoundingClientRect().width),
          imgH: Math.round(img.getBoundingClientRect().height),
        };
      });
    }

    return { services, caseStudies };
  });

  console.log("Services layout:", JSON.stringify(res.services.slice(0, 8), null, 2));
  console.log("Case studies layout:", JSON.stringify(res.caseStudies.slice(0, 4), null, 2));

  await browser.close();
}

inspectDetails().catch(console.error);
