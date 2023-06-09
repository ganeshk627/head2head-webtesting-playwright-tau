import { test, expect } from '@playwright/test';

test('simple failure test', async ({page}) => {
    await page.goto("https://my-json-server.typicode.com/ganeshk627/json-server-hogwarts");
    await expect(page).toHaveTitle(/My Json Server/);
});

test('simple test without await', async ({page}) => {
    page.goto("https://my-json-server.typicode.com/ganeshk627/json-server-hogwarts");
    expect(page).toHaveTitle(/My Json Server/);
});