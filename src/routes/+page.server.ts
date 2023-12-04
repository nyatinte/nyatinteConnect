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
			},
			{
				src: 'https://static.zenn.studio/images/logo.png',
				alt: '',
				href: '/zenn',
				title: 'Zenn',
				description: '記事を書きます'
			},
			{
				src: 'https://cdn.iconscout.com/icon/free/png-512/free-graphql-3521468-2944912.png?f=webp',
				alt: '',
				href: 'graphql',
				title: '自己紹介',
				description: '知りたい情報を、必要な分だけ'
			}
		]
	};
}) satisfies PageServerLoad<{
	linkCards: ComponentProps<LinkCard>[];
}>;
