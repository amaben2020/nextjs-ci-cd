// tests/home.spec.ts
import { test, expect } from '@playwright/test';

test('Homepage renders correctly', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('http://localhost:3000'); // Update the URL if your app runs on a different port

  // Check if the cards are rendered
  const cards = await page.locator('.card').all();
  expect(cards.length).toBe(3); // Ensure there are 3 cards

  // Verify the text content of the first card
  const firstCardText = await cards[0].innerText();
  expect(firstCardText).toContain(
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  );

  // Check if the footer links are rendered
  const footerLinks = await page.locator('footer a').all();
  expect(footerLinks.length).toBe(3); // Ensure there are 3 footer links

  // Verify the text content of the first footer link
  const firstFooterLinkText = await footerLinks[0].innerText();
  expect(firstFooterLinkText).toContain('Learn');

  // Verify the href attribute of the first footer link
  const firstFooterLinkHref = await footerLinks[0].getAttribute('href');
  expect(firstFooterLinkHref).toBe(
    'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
  );
});
