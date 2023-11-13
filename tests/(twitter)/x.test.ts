import { expect, test } from '@playwright/test';
import { NYATINTE_TWITTER_URL } from '../../src/routes/(twitter)/twitter';

test(`/xにアクセスすると${NYATINTE_TWITTER_URL}へリダイレクトする`, async ({ page }) => {
	await page.goto('/x');
	expect(page.url()).toBe(NYATINTE_TWITTER_URL);
});
