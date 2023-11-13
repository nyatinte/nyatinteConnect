import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { NYATINTE_TWITTER_URL } from './twitter';

export const load = (async () => {
	throw redirect(303, NYATINTE_TWITTER_URL);
}) satisfies LayoutServerLoad<void>;
