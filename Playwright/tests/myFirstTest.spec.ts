import {test, expect} from "@playwright/test";
import {hello, helloworld} from "./demo/hello";

test('My First Test', async ({page}) => {
    await page.goto('https://google.com');
    await expect(page).toHaveTitle('Google');
});