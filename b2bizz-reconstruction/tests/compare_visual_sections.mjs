import { chromium } from "playwright";
import fs from "fs";
import path from "path";

async function captureAllSections() {
  const browser = await chromium.launch({ headless: true });
  const outDir = path.resolve("./screenshots/visual-qa/sections");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const refPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await refPage.goto("https://b2bizz-wbs.framer.website/", { waitUntil: "domcontentloaded", timeout: 35000 });
  await refPage.waitForTimeout(2000);

  // Trigger hydration
  const refHeight = await refPage.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < refHeight; y += 400) {
    await refPage.evaluate(y => window.scrollTo(0, y), y);
    await refPage.waitForTimeout(50);
  }
  await refPage.evaluate(() => window.scrollTo(0, 0));
  await refPage.waitForTimeout(1000);

  const localPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await localPage.goto("http://localhost:3001/", { waitUntil: "networkidle", timeout: 25000 });
  await localPage.waitForTimeout(2000);

  const localHeight = await localPage.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < localHeight; y += 400) {
    await localPage.evaluate(y => window.scrollTo(0, y), y);
    await localPage.waitForTimeout(50);
  }
  await localPage.evaluate(() => window.scrollTo(0, 0));
  await localPage.waitForTimeout(1000);

  const targets = [
    {
      name: "01-hero",
      localSelector: "section:has(h1)",
      refSelector: "section:has(h1)",
    },
    {
      name: "02-marquee",
      localSelector: 'section:has-text("FAST-MOVING")',
      refSelector: 'section:has-text("fast-moving")',
    },
    {
      name: "03-about",
      localSelector: 'section:has(h2:has-text("Informed strategy"))',
      refSelector: 'section:has(h2:has-text("Informed strategy"))',
    },
    {
      name: "04-industries",
      localSelector: 'section:has(h2:has-text("Accelerating B2B"))',
      refSelector: 'section:has(h2:has-text("Accelerating B2B"))',
    },
    {
      name: "05-valueprops",
      localSelector: 'section:has(h2:has-text("What makes us"))',
      refSelector: 'section:has(h2:has-text("What makes us"))',
    },
    {
      name: "07-services",
      localSelector: 'section:has(h2:has-text("Expert services"))',
      refSelector: 'section:has(h2:has-text("Expert services"))',
    },
    {
      name: "08-metrics",
      localSelector: 'section:has(h2:has-text("Proven performance"))',
      refSelector: 'section:has(h2:has-text("Proven performance"))',
    },
    {
      name: "09-casestudies",
      localSelector: 'section:has(a[href="/case-study"])',
      refSelector: 'section:has-text("EdgeTrans")',
    },
    {
      name: "10-methodology",
      localSelector: 'section:has(h2:has-text("Our method"))',
      refSelector: 'section:has(h2:has-text("Our method"))',
    },
    {
      name: "11-ctabanner",
      localSelector: 'section:has(h2:has-text("ready for the next level"))',
      refSelector: 'section:has(h2:has-text("ready for the next level"))',
    },
    {
      name: "12-footer",
      localSelector: "footer",
      refSelector: "footer",
    },
  ];

  const report = [];

  for (const t of targets) {
    console.log(`Processing: ${t.name}...`);
    let localBbox = null;
    try {
      const localEl = localPage.locator(t.localSelector).first();
      if (await localEl.count() > 0) {
        await localEl.scrollIntoViewIfNeeded();
        await localPage.waitForTimeout(300);
        localBbox = await localEl.boundingBox();
        await localEl.screenshot({ path: path.join(outDir, `local-${t.name}.png`) });
        console.log(`  Local ${t.name} captured: height=${Math.round(localBbox.height)}px`);
      } else {
        console.log(`  Local ${t.name} NOT FOUND!`);
      }
    } catch (e) {
      console.log(`  Local error on ${t.name}: ${e.message}`);
    }

    let refBbox = null;
    try {
      const refEl = refPage.locator(t.refSelector).first();
      if (await refEl.count() > 0) {
        await refEl.scrollIntoViewIfNeeded();
        await refPage.waitForTimeout(300);
        refBbox = await refEl.boundingBox();
        await refEl.screenshot({ path: path.join(outDir, `ref-${t.name}.png`) });
        console.log(`  Ref ${t.name} captured: height=${Math.round(refBbox.height)}px`);
      } else {
        console.log(`  Ref ${t.name} NOT FOUND!`);
      }
    } catch (e) {
      console.log(`  Ref error on ${t.name}: ${e.message}`);
    }

    report.push({
      section: t.name,
      localHeight: localBbox ? Math.round(localBbox.height) : null,
      refHeight: refBbox ? Math.round(refBbox.height) : null,
      heightDiff: (localBbox && refBbox) ? Math.round(localBbox.height - refBbox.height) : null,
    });
  }

  // Also capture full-page desktop screenshot
  await localPage.evaluate(() => window.scrollTo(0, 0));
  await localPage.waitForTimeout(400);
  await localPage.screenshot({ path: path.join(outDir, "../local-desktop_1440-full-updated.png"), fullPage: true });

  await browser.close();

  fs.writeFileSync(path.join(outDir, "section_comparison_report_updated.json"), JSON.stringify(report, null, 2));
  console.log("\nUpdated Section comparison complete! Report saved.");
}

captureAllSections().catch(console.error);
