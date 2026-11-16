import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const VIEWPORTS = [
  { name: "Desktop_1440", width: 1440, height: 900 },
  { name: "Laptop_1280", width: 1280, height: 800 },
  { name: "SmallLaptop_1024", width: 1024, height: 768 },
  { name: "Tablet_768", width: 768, height: 1024 },
  { name: "Mobile_390", width: 390, height: 844 },
  { name: "SmallMobile_375", width: 375, height: 667 },
];

const LOCAL_BASE = "http://localhost:3001";
const REF_BASE = "https://b2bizz-wbs.framer.website";

const ROUTES = [
  { path: "/", name: "Home" },
  { path: "/home-2", name: "Home2" },
  { path: "/about", name: "About" },
  { path: "/service", name: "Services" },
  { path: "/service/b2b-website-design-development", name: "ServiceDetail" },
  { path: "/case-study", name: "CaseStudies" },
  { path: "/case-study/lead-generation-boost-for-a-b2b-logistics-company", name: "CaseStudyDetail" },
  { path: "/blog", name: "Blog" },
  { path: "/blog/how-to-scale-your-b2b-sales-funnel-in-2026", name: "BlogDetail" },
  { path: "/contact", name: "Contact" },
  { path: "/changelog", name: "Changelog" },
  { path: "/legal-pages/privacy-policy", name: "PrivacyPolicy" },
];

const screenshotDir = path.resolve("./screenshots");
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

async function runComprehensiveAudit() {
  console.log("=== Launching Comprehensive Responsive Audit across 6 Viewports ===");
  const browser = await chromium.launch({ headless: true });

  const auditReport = {
    timestamp: new Date().toISOString(),
    viewportsTested: VIEWPORTS.map((v) => `${v.width}px (${v.name})`),
    routesAudited: ROUTES.map((r) => r.path),
    viewportResults: {},
    routeStatusLocal: {},
    referenceRouteMetrics: {},
  };

  // Phase 1: Test route accessibility on local vs reference
  console.log("\n--- Checking Route Reachability ---");
  const probePage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  for (const route of ROUTES) {
    let localStatus = null;
    let localTitle = "";
    try {
      const resp = await probePage.goto(`${LOCAL_BASE}${route.path}`, { waitUntil: "domcontentloaded", timeout: 8000 });
      localStatus = resp ? resp.status() : null;
      localTitle = await probePage.title();
    } catch (e) {
      localStatus = `ERROR: ${e.message}`;
    }

    auditReport.routeStatusLocal[route.path] = {
      name: route.name,
      status: localStatus,
      title: localTitle,
      isCurrentlyImplemented: localStatus === 200 && !localTitle.includes("404"),
    };
    console.log(`Route ${route.path} on Local: status ${localStatus} (${localTitle})`);
  }
  await probePage.close();

  // Phase 2: Comprehensive deep audit of current implementation across all 6 viewports
  console.log("\n--- Executing 6-Viewport Deep Audit on Implemented Route (/) ---");
  for (const vp of VIEWPORTS) {
    console.log(`\nTesting Viewport: ${vp.width}px (${vp.name})...`);
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });

    await page.goto(`${LOCAL_BASE}/`, { waitUntil: "networkidle", timeout: 15000 });
    await page.waitForTimeout(1000);

    // Deep evaluation of layout, overflow, typography, containers, buttons, touch targets
    const metrics = await page.evaluate((vpWidth) => {
      const doc = document.documentElement;
      const body = document.body;
      const scrollWidth = doc.scrollWidth;
      const clientWidth = doc.clientWidth;
      const windowWidth = window.innerWidth;
      const hasHorizontalOverflow = scrollWidth > windowWidth;

      // Find any elements causing overflow
      const overflowingElements = [];
      const allElements = document.querySelectorAll("*");
      for (const el of allElements) {
        const rect = el.getBoundingClientRect();
        if (rect.right > windowWidth + 1 || rect.left < -1) {
          overflowingElements.push({
            tagName: el.tagName,
            id: el.id || null,
            className: (el.className || "").toString().slice(0, 100),
            right: Math.round(rect.right),
            left: Math.round(rect.left),
            width: Math.round(rect.width),
          });
          if (overflowingElements.length >= 10) break;
        }
      }

      // Navbar evaluation
      const navHeader = document.querySelector("header");
      const desktopNav = document.querySelector("nav.hidden.lg\\:flex");
      const isDesktopNavVisible = desktopNav ? window.getComputedStyle(desktopNav).display !== "none" : false;
      const hamburger = document.querySelector("button[aria-label='Toggle Navigation Menu']");
      const isHamburgerVisible = hamburger ? window.getComputedStyle(hamburger).display !== "none" : false;
      const headerCTA = document.querySelector("header .btn-primary");
      const isHeaderCTAVisible = headerCTA ? window.getComputedStyle(headerCTA).display !== "none" : false;

      // Typography scaling evaluation
      const h1 = document.querySelector("h1");
      const h1Styles = h1 ? window.getComputedStyle(h1) : null;
      const h2 = document.querySelector("h2");
      const h2Styles = h2 ? window.getComputedStyle(h2) : null;
      const bodySample = document.querySelector("p");
      const bodyStyles = bodySample ? window.getComputedStyle(bodySample) : null;

      // Container widths
      const containers = Array.from(document.querySelectorAll(".container-wrapper")).map((c) => {
        const rect = c.getBoundingClientRect();
        return {
          width: Math.round(rect.width),
          maxWidth: window.getComputedStyle(c).maxWidth,
          paddingLeft: window.getComputedStyle(c).paddingLeft,
          paddingRight: window.getComputedStyle(c).paddingRight,
        };
      });

      // Section padding & spacing
      const sections = Array.from(document.querySelectorAll("section")).map((s, idx) => {
        const cs = window.getComputedStyle(s);
        const rect = s.getBoundingClientRect();
        return {
          index: idx,
          id: s.id || `section-${idx}`,
          height: Math.round(rect.height),
          paddingTop: cs.paddingTop,
          paddingBottom: cs.paddingBottom,
        };
      });

      // Metric Counter Grid
      const metricGrid = document.querySelector(".grid.grid-cols-2.md\\:grid-cols-4");
      const metricCols = metricGrid ? window.getComputedStyle(metricGrid).gridTemplateColumns.split(" ").length : 0;
      const metricCards = Array.from(document.querySelectorAll("#metrics .card-base, #metrics .glass-card")).map((c) => {
        const r = c.getBoundingClientRect();
        return { width: Math.round(r.width), height: Math.round(r.height) };
      });

      // Buttons Evaluation & Touch Targets
      const buttons = Array.from(document.querySelectorAll("button, a.btn-primary, a.btn-secondary, a.btn-ghost")).map((b) => {
        const rect = b.getBoundingClientRect();
        const cs = window.getComputedStyle(b);
        return {
          text: (b.innerText || "").trim().slice(0, 30),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          minHeight: cs.minHeight,
          fontSize: cs.fontSize,
          borderRadius: cs.borderRadius,
          meetsTouchTarget: rect.height >= 43.5 && rect.width >= 43.5, // 44px W3C/Apple
        };
      });

      // Carousel / Marquee Ticker
      const marqueeContainer = document.querySelector("#marquee");
      const marqueeMaskLeft = document.querySelector("#marquee .from-canvas");
      const marqueeRect = marqueeContainer ? marqueeContainer.getBoundingClientRect() : null;

      // Footer Stacking
      const footerGrid = document.querySelector("footer .grid");
      const footerCols = footerGrid ? window.getComputedStyle(footerGrid).gridTemplateColumns.split(" ").length : 0;
      const footerNewsletter = document.querySelector("footer input[type='email']");
      const newsletterRect = footerNewsletter ? footerNewsletter.getBoundingClientRect() : null;

      return {
        viewportWidth: vpWidth,
        scrollWidth,
        clientWidth,
        windowWidth,
        hasHorizontalOverflow,
        overflowingElements,
        navigation: {
          headerHeight: navHeader ? Math.round(navHeader.getBoundingClientRect().height) : 0,
          isDesktopNavVisible,
          isHamburgerVisible,
          isHeaderCTAVisible,
        },
        typography: {
          h1: h1Styles ? { fontSize: h1Styles.fontSize, lineHeight: h1Styles.lineHeight, letterSpacing: h1Styles.letterSpacing } : null,
          h2: h2Styles ? { fontSize: h2Styles.fontSize, lineHeight: h2Styles.lineHeight } : null,
          body: bodyStyles ? { fontSize: bodyStyles.fontSize, lineHeight: bodyStyles.lineHeight } : null,
        },
        containers,
        sections,
        metricGrid: {
          columns: metricCols,
          cardCount: metricCards.length,
          cardDimensions: metricCards,
        },
        buttons: buttons.slice(0, 8),
        marquee: {
          height: marqueeRect ? Math.round(marqueeRect.height) : 0,
          hasMask: !!marqueeMaskLeft,
        },
        footer: {
          columns: footerCols,
          newsletterWidth: newsletterRect ? Math.round(newsletterRect.width) : 0,
        },
      };
    }, vp.width);

    // Test Mobile Drawer Interaction if Hamburger is present
    let mobileDrawerResult = { tested: false };
    if (metrics.navigation.isHamburgerVisible) {
      try {
        const hamburgerBtn = page.locator("button[aria-label='Toggle Navigation Menu']");
        await hamburgerBtn.click();
        await page.waitForTimeout(500);

        const drawer = page.locator("text=Pages & Sub-routes");
        const isDrawerOpen = await drawer.isVisible();

        // Check drawer dimensions and link responsiveness
        const drawerMetrics = await page.evaluate(() => {
          const drawerPanel = document.querySelector("header .bg-\\[\\#161a18\\]\\/95");
          if (!drawerPanel) return null;
          const rect = drawerPanel.getBoundingClientRect();
          const links = Array.from(drawerPanel.querySelectorAll("a")).map((a) => ({
            text: a.innerText.trim(),
            height: Math.round(a.getBoundingClientRect().height),
          }));
          return {
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            linkCount: links.length,
          };
        });

        const drawerScreenshotPath = path.join(screenshotDir, `local-${vp.width}px-drawer-open.png`);
        await page.screenshot({ path: drawerScreenshotPath });

        // Close drawer
        await hamburgerBtn.click();
        await page.waitForTimeout(300);

        mobileDrawerResult = {
          tested: true,
          openedSuccessfully: isDrawerOpen,
          drawerMetrics,
          drawerScreenshot: drawerScreenshotPath,
        };
      } catch (err) {
        mobileDrawerResult = { tested: true, error: err.message };
      }
    }

    // Capture Local Full Page Screenshot
    const localScreenshot = path.join(screenshotDir, `local-${vp.width}px-${vp.name.toLowerCase()}.png`);
    await page.screenshot({ path: localScreenshot, fullPage: true });

    // Compare with Framer Reference if accessible
    let refMetrics = null;
    try {
      const refPage = await browser.newPage({
        viewport: { width: vp.width, height: vp.height },
      });
      await refPage.goto(REF_BASE, { waitUntil: "domcontentloaded", timeout: 15000 });
      await refPage.waitForTimeout(2000);

      refMetrics = await refPage.evaluate((vpWidth) => {
        const doc = document.documentElement;
        const scrollWidth = doc.scrollWidth;
        const windowWidth = window.innerWidth;
        const hasHorizontalOverflow = scrollWidth > windowWidth;

        const h1 = document.querySelector("h1");
        const h1Styles = h1 ? window.getComputedStyle(h1) : null;

        // Container check
        const mainContainer = document.querySelector("main") || document.body;
        
        return {
          viewportWidth: vpWidth,
          scrollWidth,
          windowWidth,
          hasHorizontalOverflow,
          h1: h1Styles ? { fontSize: h1Styles.fontSize, lineHeight: h1Styles.lineHeight } : null,
        };
      }, vp.width);

      const refScreenshot = path.join(screenshotDir, `ref-${vp.width}px-${vp.name.toLowerCase()}.png`);
      await refPage.screenshot({ path: refScreenshot, fullPage: true });
      refMetrics.screenshot = refScreenshot;
      await refPage.close();
    } catch (e) {
      refMetrics = { error: e.message };
    }

    auditReport.viewportResults[vp.width] = {
      viewport: vp,
      local: metrics,
      mobileDrawer: mobileDrawerResult,
      reference: refMetrics,
      localScreenshot,
    };

    console.log(`Summary for ${vp.width}px: Overflow=${metrics.hasHorizontalOverflow}, DesktopNav=${metrics.navigation.isDesktopNavVisible}, Hamburger=${metrics.navigation.isHamburgerVisible}, H1=${metrics.typography.h1?.fontSize}, MetricCols=${metrics.metricGrid.columns}, FooterCols=${metrics.footer.columns}`);
    await page.close();
  }

  await browser.close();

  fs.writeFileSync("./tests/full_responsive_audit_results.json", JSON.stringify(auditReport, null, 2));
  console.log("\nAudit Complete! Detailed results saved to tests/full_responsive_audit_results.json");
}

runComprehensiveAudit().catch(console.error);
