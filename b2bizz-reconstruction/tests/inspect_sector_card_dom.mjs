import { chromium } from "playwright";

async function inspectSectorCard() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("https://b2bizz-wbs.framer.website/home-2", { waitUntil: "networkidle" });

  const cardInfo = await page.evaluate(() => {
    const sec = Array.from(document.querySelectorAll("section"))[3];
    const h3 = Array.from(sec.querySelectorAll("h3")).find(h => h.innerText.trim().length > 0);
    if (!h3) return "No non-empty h3 found";
    
    let parent = h3.parentElement;
    while (parent && parent.tagName !== "SECTION" && !parent.getAttribute("data-framer-name")?.includes("Card")) {
      parent = parent.parentElement;
    }

    return {
      title: h3.innerText,
      tag: parent?.tagName,
      framerName: parent?.getAttribute("data-framer-name"),
      html: parent ? parent.outerHTML.slice(0, 1000) : "No parent",
      text: parent ? parent.innerText : ""
    };
  });

  console.log("Sector card info:", cardInfo);
  await browser.close();
}

inspectSectorCard().catch(console.error);
