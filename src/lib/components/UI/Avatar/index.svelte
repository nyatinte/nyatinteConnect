<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<img {src} {alt} class="avatar" />

<style>
	.avatar {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
</style>
