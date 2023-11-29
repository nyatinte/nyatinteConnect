<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { match } from 'ts-pattern';

	export let shadow: string | undefined = undefined;
	export let src: string;
	export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
	$: width = match(size)
		.with('sm', () => 'w-8')
		.with('md', () => 'w-12')
		.with('lg', () => 'w-16')
		.with('xl', () => 'w-40')
		.exhaustive();
</script>

<Avatar {shadow} {width} {src} />
