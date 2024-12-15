//const{test}=require("@playwright/test");
import {test} from "@playwright/test";

test("Simple Google search test @google01", async ({page

 }) => {
    await page.goto("https://www.google.com/");

    let searchBox=page.locator("//textarea[@class='gLFyf']");
   
   await page.waitForTimeout(3000);

   //await  searchBox.type("Playwright automation");
   await  searchBox.fill("Playwright automation");
   await page.waitForTimeout(3000);
   await searchBox.press("Enter");
   await page.waitForTimeout(3000);


   

 });

 test("Simple Google search test @youtube02", 
    async ({ page }) => {
        await page.goto("https://www.youtube.com/");

    });