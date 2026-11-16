import { chromium } from "playwright";

async function inspectYearlyPricing() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("https://b2bizz-wbs.framer.website/home-2", { waitUntil: "networkidle" });

  const pricingSection = page.locator("section:has-text('The right consulting plan for your business')");
  const yearlyButton = pricingSection.locator("text='Yearly'");
  if (await yearlyButton.count() > 0) {
    await yearlyButton.click();
    await page.waitForTimeout(500);
    const text = await pricingSection.innerText();
    console.log("Yearly pricing text:\n", text);
  } else {
    console.log("Yearly button not found directly");
  }

  await browser.close();
}

inspectYearlyPricing().catch(console.error);
