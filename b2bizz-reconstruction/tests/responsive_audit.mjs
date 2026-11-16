import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const VIEWPORTS = [
  { name: "Desktop", width: 1440, height: 900 },
  { name: "Laptop", width: 1280, height: 800 },
  { name: "SmallLaptop", width: 1024, height: 768 },
  { name: "Tablet", width: 768, height: 1024 },
  { name: "Mobile", width: 390, height: 844 },
  { name: "SmallMobile", width: 375, height: 667 },
];

const LOCAL_URL = "http://localhost:3001/";
const REF_URL = "https://b2bizz-wbs.framer.website/";

const screenshotDir = path.resolve("./screenshots");
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

async function runAudit() {
  console.log("Starting responsive audit across 6 viewports...");
  const browser = await chromium.launch({ headless: true });

  const auditResults = [];

  for (const vp of VIEWPORTS) {
    console.log(`\n========================================`);
    console.log(`Testing ${vp.name} (${vp.width}x${vp.height})...`);
    console.log(`========================================`);

    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
    });

    // 1. Audit Local Implementation
    await page.goto(LOCAL_URL, { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    const localMetrics = await page.evaluate((vpWidth) => {
      const scrollWidth = document.documentElement.scrollWidth;
      const windowWidth = window.innerWidth;
      const hasHorizontalOverflow = scrollWidth > windowWidth;

      // Header checks
      const desktopNav = document.querySelector("nav.hidden.lg\\:flex");
      const isDesktopNavVisible = desktopNav
        ? window.getComputedStyle(desktopNav).display !== "none"
        : false;

      const hamburger = document.querySelector("button[aria-label='Toggle Navigation Menu']");
      const isHamburgerVisible = hamburger
        ? window.getComputedStyle(hamburger).display !== "none"
        : false;

      // Container widths
      const containerWrapper = document.querySelector(".container-wrapper");
      const wrapperWidth = containerWrapper ? containerWrapper.getBoundingClientRect().width : 0;

      // Primary Button dimensions
      const primaryBtn = document.querySelector(".btn-primary");
      const btnRect = primaryBtn ? primaryBtn.getBoundingClientRect() : { width: 0, height: 0 };

      // Display Headline font size
      const h1 = document.querySelector("h1");
      const h1FontSize = h1 ? window.getComputedStyle(h1).fontSize : "0px";
      const h1LineHeight = h1 ? window.getComputedStyle(h1).lineHeight : "0px";

      // Card dimensions & column count in grid
      const grid = document.querySelector(".grid.grid-cols-2.md\\:grid-cols-4");
      const gridCols = grid ? window.getComputedStyle(grid).gridTemplateColumns.split(" ").length : 0;

      return {
        viewportWidth: vpWidth,
        scrollWidth,
        windowWidth,
        hasHorizontalOverflow,
        isDesktopNavVisible,
        isHamburgerVisible,
        wrapperWidth,
        btnHeight: btnRect.height,
        btnWidth: btnRect.width,
        h1FontSize,
        h1LineHeight,
        gridCols,
      };
    }, vp.width);

    // Capture Local Screenshot
    const localScreenshotPath = path.join(
      screenshotDir,
      `local-${vp.width}px-${vp.name.toLowerCase()}.png`
    );
    await page.screenshot({ path: localScreenshotPath, fullPage: false });

    // Test Mobile Menu toggle if hamburger is visible
    let mobileDrawerWorks = false;
    if (localMetrics.isHamburgerVisible) {
      try {
        const hamburgerBtn = page.locator("button[aria-label='Toggle Navigation Menu']");
        await hamburgerBtn.click();
        await page.waitForTimeout(500);
        const drawer = page.locator("text=Pages & Sub-routes");
        mobileDrawerWorks = await drawer.isVisible();
        await hamburgerBtn.click(); // Close drawer
        await page.waitForTimeout(300);
      } catch (e) {
        console.error("Mobile drawer test error:", e);
      }
    }

    localMetrics.mobileDrawerWorks = mobileDrawerWorks;
    localMetrics.localScreenshot = localScreenshotPath;

    // 2. Audit Reference Implementation if accessible
    let refMetrics = null;
    try {
      const refPage = await browser.newPage({
        viewport: { width: vp.width, height: vp.height },
      });
      await refPage.goto(REF_URL, { waitUntil: "domcontentloaded", timeout: 15000 });
      await refPage.waitForTimeout(1500);

      refMetrics = await refPage.evaluate(() => {
        const scrollWidth = document.documentElement.scrollWidth;
        const windowWidth = window.innerWidth;
        const h1 = document.querySelector("h1");
        const h1FontSize = h1 ? window.getComputedStyle(h1).fontSize : "0px";

        return {
          scrollWidth,
          windowWidth,
          hasHorizontalOverflow: scrollWidth > windowWidth,
          h1FontSize,
        };
      });

      const refScreenshotPath = path.join(
        screenshotDir,
        `ref-${vp.width}px-${vp.name.toLowerCase()}.png`
      );
      await refPage.screenshot({ path: refScreenshotPath, fullPage: false });
      refMetrics.refScreenshot = refScreenshotPath;
      await refPage.close();
    } catch (e) {
      console.log(`Could not capture reference for ${vp.name}: ${e.message}`);
    }

    auditResults.push({
      viewport: vp,
      local: localMetrics,
      reference: refMetrics,
    });

    console.log(`Results for ${vp.name}:`, {
      hasHorizontalOverflow: localMetrics.hasHorizontalOverflow,
      desktopNav: localMetrics.isDesktopNavVisible,
      hamburger: localMetrics.isHamburgerVisible,
      mobileDrawer: localMetrics.mobileDrawerWorks,
      wrapperWidth: localMetrics.wrapperWidth,
      h1FontSize: localMetrics.h1FontSize,
      gridCols: localMetrics.gridCols,
    });

    await page.close();
  }

  await browser.close();

  fs.writeFileSync(
    "./tests/responsive_audit_results.json",
    JSON.stringify(auditResults, null, 2)
  );
  console.log("\nResponsive audit completed. Results saved to ./tests/responsive_audit_results.json");
}

runAudit().catch(console.error);
