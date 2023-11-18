<script lang="ts">
	import Avatar from '$lib/components/UI/Avatar/Avatar.svelte';
	import LinkCard from '$lib/components/UI/LinkCard/LinkCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { linkCards } = data;
</script>

<div class="grid h-full w-full grid-rows-2">
	<section class="w-full p-10 text-center">
		<div class="grid place-content-center">
			<Avatar src="/nyatinte.png" size="xl" />
		</div>
		<h1 class="h1">Nyatinte</h1>
	</section>
	<div class="flex w-full flex-wrap justify-center gap-4 p-4">
		{#each linkCards as card (card.href)}
			<LinkCard {...card} />
		{/each}
	</div>
</div>
