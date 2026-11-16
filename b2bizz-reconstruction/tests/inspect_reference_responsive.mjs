import { chromium } from "playwright";

async function inspectRef() {
  const browser = await chromium.launch({ headless: true });
  for (const w of [1440, 1024, 768, 390, 375]) {
    const page = await browser.newPage({ viewport: { width: w, height: 800 } });
    await page.goto("https://b2bizz-wbs.framer.website/", { waitUntil: "domcontentloaded", timeout: 20000 });
    await page.waitForTimeout(2000);

    const data = await page.evaluate(() => {
      // Find top nav container
      const navContainer = document.querySelector(".framer-1ur8hyr-container") || document.querySelector("nav")?.parentElement;
      const navHeight = navContainer ? Math.round(navContainer.getBoundingClientRect().height) : 0;
      const navWidth = navContainer ? Math.round(navContainer.getBoundingClientRect().width) : 0;

      // Check header items
      const logo = document.querySelector("a[href='/']") || document.querySelector("header a");
      const logoRect = logo ? { width: Math.round(logo.getBoundingClientRect().width), height: Math.round(logo.getBoundingClientRect().height) } : null;

      // Check primary CTA in header
      const headerButtons = Array.from(document.querySelectorAll("header a, nav a, .framer-1ur8hyr-container a")).map(a => ({
        text: (a.innerText || "").trim(),
        width: Math.round(a.getBoundingClientRect().width),
        height: Math.round(a.getBoundingClientRect().height),
        visible: window.getComputedStyle(a).display !== "none" && a.getBoundingClientRect().width > 0
      })).filter(a => a.visible);

      // Check H1 styling
      const h1 = document.querySelector("h1");
      const h1Styles = h1 ? {
        fontSize: window.getComputedStyle(h1).fontSize,
        lineHeight: window.getComputedStyle(h1).lineHeight,
        letterSpacing: window.getComputedStyle(h1).letterSpacing,
        width: Math.round(h1.getBoundingClientRect().width)
      } : null;

      // Check Section Spacing
      const sections = Array.from(document.querySelectorAll("section")).slice(0, 4).map(s => {
        const cs = window.getComputedStyle(s);
        return {
          paddingTop: cs.paddingTop,
          paddingBottom: cs.paddingBottom,
          height: Math.round(s.getBoundingClientRect().height)
        };
      });

      // Check Footer
      const footer = document.querySelector("footer");
      const footerGrid = footer ? footer.querySelector(".grid") || footer.firstElementChild : null;
      const footerCols = footerGrid ? window.getComputedStyle(footerGrid).gridTemplateColumns.split(" ").length : 0;

      return {
        navHeight,
        navWidth,
        logoRect,
        headerButtons,
        h1Styles,
        sections,
        footerCols
      };
    });

    console.log(`\n=== Reference at ${w}px ===`);
    console.log(JSON.stringify(data, null, 2));
    await page.close();
  }
  await browser.close();
}

inspectRef().catch(console.error);
