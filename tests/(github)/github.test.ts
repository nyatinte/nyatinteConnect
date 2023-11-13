import { expect, test } from '@playwright/test';
import { NYATINTE_GITHUB_URL } from '../../src/routes/(github)/github';

test(`/githubにアクセスすると${NYATINTE_GITHUB_URL}へリダイレクトする`, async ({ page }) => {
	await page.goto('/github');
	expect(page.url()).toBe(NYATINTE_GITHUB_URL);
});
