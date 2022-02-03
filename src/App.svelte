<script lang="ts">
	import Tailwind from "./lib/Tailwind.svelte";
	import { onMount } from "svelte";
	import bgEventStore from "./stores/BackgroundEvent";

	let ready = false;
	let bgEvents;

	onMount(() => {
		ready = true;
		bgEvents = bgEventStore;
		bgEvents.init();
	});
</script>

<main>
	{#if ready}
		Svelte + typescript + tailwind boilerplate
		<p>
			<button on:click={bgEvents.start()}>start</button>
		</p>
		<p>
			<button on:click={bgEvents.stop()}>stop</button>
		</p>
		{#each $bgEvents as event}
			<p>{event}</p>
		{/each}
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
