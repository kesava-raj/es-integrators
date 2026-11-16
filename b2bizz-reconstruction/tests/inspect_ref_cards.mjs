import { chromium } from "playwright";

async function inspectCards() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("https://b2bizz-wbs.framer.website/", { waitUntil: "domcontentloaded", timeout: 35000 });
  await page.waitForTimeout(2000);

  // Trigger hydration
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < h; y += 400) {
    await page.evaluate(y => window.scrollTo(0, y), y);
    await page.waitForTimeout(50);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);

  const data = await page.evaluate(() => {
    // 1. Services section
    const servicesHeading = Array.from(document.querySelectorAll("h2")).find(h => h.innerText.includes("Expert services"));
    const servicesSection = servicesHeading?.closest("section");
    let servicesInfo = null;
    if (servicesSection) {
      const cards = Array.from(servicesSection.querySelectorAll("a, [data-framer-name]")).filter(el => {
        const text = el.innerText || "";
        return text.includes("B2B website") || text.includes("Brand identity") || text.includes("Digital transformation");
      });
      // Get direct card containers
      const cardRects = Array.from(servicesSection.querySelectorAll("div")).map(d => {
        const r = d.getBoundingClientRect();
        const text = d.innerText?.trim() || "";
        if (text.includes("B2B website design") && r.width > 200 && r.height > 100 && r.height < 600) {
          return {
            text: text.slice(0, 50),
            width: Math.round(r.width),
            height: Math.round(r.height),
            top: Math.round(r.top + window.scrollY),
            left: Math.round(r.left),
          };
        }
        return null;
      }).filter(Boolean);

      servicesInfo = {
        sectionHeight: Math.round(servicesSection.getBoundingClientRect().height),
        cards: cardRects.slice(0, 5),
      };
    }

    // 2. Case studies section
    const caseHeading = Array.from(document.querySelectorAll("h2")).find(h => h.innerText.includes("Lead generation") || h.innerText.includes("Real cases"));
    const caseSection = caseHeading?.closest("section");
    let caseInfo = null;
    if (caseSection) {
      const r = caseSection.getBoundingClientRect();
      const cards = Array.from(caseSection.querySelectorAll("img[alt*='Case']")).map(img => {
        const card = img.closest("div");
        const cr = card ? card.getBoundingClientRect() : null;
        return {
          imgSrc: img.src,
          imgWidth: Math.round(img.getBoundingClientRect().width),
          imgHeight: Math.round(img.getBoundingClientRect().height),
          cardWidth: cr ? Math.round(cr.width) : null,
          cardHeight: cr ? Math.round(cr.height) : null,
        };
      });
      caseInfo = {
        sectionHeight: Math.round(r.height),
        cards,
      };
    }

    // 3. CTA section
    const ctaHeading = Array.from(document.querySelectorAll("h2")).find(h => h.innerText.includes("ready for the next level"));
    const ctaSection = ctaHeading?.closest("section");
    let ctaInfo = null;
    if (ctaSection) {
      const r = ctaSection.getBoundingClientRect();
      const style = window.getComputedStyle(ctaSection);
      ctaInfo = {
        sectionHeight: Math.round(r.height),
        paddingTop: style.paddingTop,
        paddingBottom: style.paddingBottom,
        text: ctaSection.innerText.replace(/\s+/g, " ").slice(0, 200),
      };
    }

    return { servicesInfo, caseInfo, ctaInfo };
  });

  console.log("Services Info:", JSON.stringify(data.servicesInfo, null, 2));
  console.log("Case Info:", JSON.stringify(data.caseInfo, null, 2));
  console.log("CTA Info:", JSON.stringify(data.ctaInfo, null, 2));

  await browser.close();
}

inspectCards().catch(console.error);
