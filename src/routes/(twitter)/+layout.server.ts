import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

const TWITTER_URL = 'https://twitter.com';
const USER_ID = 'nyatinte';
export const load = (async () => {
	throw redirect(303, `${TWITTER_URL}/${USER_ID}`);
}) satisfies LayoutServerLoad<void>;
