import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { NYATINTE_GITHUB_URL } from './github';

export const load = (async () => {
	throw redirect(303, NYATINTE_GITHUB_URL);
}) satisfies LayoutServerLoad<void>;
