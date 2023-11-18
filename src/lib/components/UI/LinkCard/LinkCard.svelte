<script lang="ts">
	export let src: string;
	export let alt: string;
	export let href: string;
	export let title: string;
	export let description: string;
</script>

<a
	class="card card-hover flex h-24 w-full items-center gap-4 overflow-hidden rounded-lg bg-white/60 p-4"
	{href}
>
	<img {src} class="aspect-square w-14 rounded-full bg-black/50 shadow-md" {alt} />
	<dl class="flex-1">
		<dt class="text-lg">{title}</dt>
		<dd class="text-sm text-gray-800">{description}</dd>
	</dl>
</a>
