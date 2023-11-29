const ZENN_URL = 'https://zenn.dev';
const USER_ID = 'nyatinte';

export const NYATINTE_ZENN_URL = new URL(`${ZENN_URL}/${encodeURIComponent(USER_ID)}`);
