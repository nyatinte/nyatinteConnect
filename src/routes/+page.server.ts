import type { ComponentProps } from 'svelte';
import type { PageServerLoad } from './$types';
import type LinkCard from '$lib/components/UI/LinkCard/LinkCard.svelte';

export const load = (async () => {
	return {
		linkCards: [
			{
				src: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
				alt: '',
				href: '/github',
				title: 'GitHub',
				description: '草をいっぱい生やします'
			},
			{
				src: 'https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png',
				alt: '',
				href: '/twitter',
				title: 'Twitter',
				description: 'ツイートします'
			}
		]
	};
}) satisfies PageServerLoad<{
	linkCards: ComponentProps<LinkCard>[];
}>;
