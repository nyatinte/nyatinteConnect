import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { NYATINTE_ZENN_URL } from './zenn';

export const load = (async () => {
	throw redirect(303, NYATINTE_ZENN_URL);
}) satisfies PageServerLoad;
