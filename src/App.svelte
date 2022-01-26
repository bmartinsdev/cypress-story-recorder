<script lang="ts">
	import Tailwind from "./lib/Tailwind.svelte";
	import { onMount } from "svelte";
	import bgEvent from "./stores/BackgroundEvent";

	let ready = false;

	onMount(() => {
		ready = true;
		bgEvent.init();
	});
</script>

<main>
	{#if ready}
		Svelte + typescript + tailwind boilerplate
		<button on:click={() => bgEvent.log("wtv")}>test</button>
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
