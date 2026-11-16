import { chromium } from "playwright";
import fs from "fs";

async function detailedDiff() {
  const browser = await chromium.launch({ headless: true });

  const refPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await refPage.goto("https://b2bizz-wbs.framer.website/", { waitUntil: "domcontentloaded", timeout: 35000 });
  await refPage.waitForTimeout(2000);

  // Hydrate Framer
  const h = await refPage.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < h; y += 400) {
    await refPage.evaluate(y => window.scrollTo(0, y), y);
    await refPage.waitForTimeout(40);
  }
  await refPage.evaluate(() => window.scrollTo(0, 0));
  await refPage.waitForTimeout(1000);

  const localPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await localPage.goto("http://localhost:3001/", { waitUntil: "networkidle", timeout: 25000 });
  await localPage.waitForTimeout(2000);

  const sectionsToCompare = [
    { name: "01-Hero", queryText: "Built for B2B, focused on results." },
    { name: "02-Marquee", queryText: "fast-moving B2B teams" },
    { name: "03-About", queryText: "Informed strategy, Operational strength" },
    { name: "04-Industries", queryText: "Accelerating B2B growth across" },
    { name: "05-WhyChooseUs", queryText: "What makes us the right partner" },
    { name: "06-Testimonial", queryText: "Working with B2bizz was a game-changer" },
    { name: "07-Services", queryText: "Expert services that move" },
    { name: "08-Metrics", queryText: "Proven performance, Measurable" },
    { name: "09-CaseStudies", queryText: "Enterprise resource integration" },
    { name: "10-Methodology", queryText: "Our method for strategic" },
    { name: "11-CtaBanner", queryText: "Is your B2B business ready" },
  ];

  const results = [];

  for (const s of sectionsToCompare) {
    const extractInfo = (query) => {
      // Find element containing query text
      const all = Array.from(document.querySelectorAll("h1, h2, h3, p, span, div, section"));
      const match = all.find(el => el.innerText && el.innerText.includes(query) && el.children.length === 0) ||
                    all.find(el => el.innerText && el.innerText.includes(query));
      if (!match) return null;
      const section = match.closest("section") || match.closest("footer") || match.parentElement;
      const secStyle = window.getComputedStyle(section);
      const mStyle = window.getComputedStyle(match);
      const rect = section.getBoundingClientRect();
      const mRect = match.getBoundingClientRect();

      // Heading if exists
      const heading = section.querySelector("h1, h2, h3");
      const hStyle = heading ? window.getComputedStyle(heading) : null;

      return {
        sectionTag: section.tagName,
        sectionHeight: Math.round(rect.height),
        sectionTop: Math.round(rect.top + window.scrollY),
        padTop: secStyle.paddingTop,
        padBottom: secStyle.paddingBottom,
        display: secStyle.display,
        gap: secStyle.gap,
        headingTag: heading?.tagName || null,
        hSize: hStyle?.fontSize || null,
        hLH: hStyle?.lineHeight || null,
        hColor: hStyle?.color || null,
        hWeight: hStyle?.fontWeight || null,
        textPreview: section.innerText.replace(/\s+/g, " ").slice(0, 100),
      };
    };

    const ref = await refPage.evaluate(extractInfo, s.queryText);
    const local = await localPage.evaluate(extractInfo, s.queryText);

    results.push({ name: s.name, ref, local });
  }

  await browser.close();

  fs.writeFileSync("./screenshots/visual-qa/sections_diff_summary.json", JSON.stringify(results, null, 2));
  console.log("Comparison completed. Results saved to sections_diff_summary.json");
}

detailedDiff().catch(console.error);
