<script lang="ts">
	import Tailwind from "./lib/Tailwind.svelte";
	import { onMount } from "svelte";

	let ready = false;

	onMount(() => (ready = true));
</script>

<main>
	{#if ready}
		Svelte + typescript + tailwind boilerplate
	{/if}
</main>

<Tailwind />

<svelte:head>
	<!-- Fonts -->
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
	/>
</svelte:head>

<style lang="scss" global>
	@import "global.scss";
</style>
