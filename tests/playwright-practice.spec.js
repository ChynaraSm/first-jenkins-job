/*import{test} from "@playwright/test";

test("",async({page}) => {
    //script goes here
});*/
import{test} from "@playwright/test";


test("", async ({ page }) => {
    // Naviagate to https:www.youtube.com

    //page fixture is like driver in selenium
    await page.goto("https://www.youtube.com");
    //pause the test for 2 seconds
    await page.waitForTimeout(2000);
   
    //locator //*[@id="search"];

    let searchBox=page.locator("//input[@id='search']");
    await page.waitForTimeout(10000);
    //click on search input field
    await searchBox.click();
    
    //enter "Cydeo" text in search box
    await searchBox.fill("Cydeo");

    //press Enter key to search 
    await searchBox.press("Enter");

    //wait for 2 seconds
    await page.waitForTimeout(2000);
   
   //first video link locator
   let firstLink=page.locator("(//a[@id='video-title'])[1]");

   //click on first video link
   await firstLink.click();
   
   //wait for 2 seconds
   await page.waitForTimeout(2000);
   
   //get the title using get Title() method

   //let videoTitle=page.title();
   
   //print the video title
   //console.log(videoTitle);
    


});



/*
<input id="search" autocapitalize="none" autocomplete="off" autocorrect="off" name="search_query" tabindex="0" type="text" spellcheck="false" placeholder="Search" aria-label="Search" role="combobox" aria-haspopup="false" aria-autocomplete="list" dir="ltr" class="ytd-searchbox" style="outline: none;">
*/