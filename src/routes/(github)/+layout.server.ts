import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

const GITHUB_URL = 'https://github.com';
const USER_ID = 'nyatinte';
export const load = (async () => {
	throw redirect(303, `${GITHUB_URL}/${USER_ID}`);
}) satisfies LayoutServerLoad<void>;
