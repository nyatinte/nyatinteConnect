const TWITTER_URL = 'https://twitter.com';
const USER_ID = 'nyatinte';

export const NYATINTE_TWITTER_URL = new URL(`${TWITTER_URL}/${encodeURIComponent(USER_ID)}`);
