import {test, expect} from '@playwright/test';

test('Homepage shows expected content', async ({page}) => {
    await page.goto('http://localhost:3000');
    await expect(page.locator('body')).toContainText('Hello, Astronaut!')
})