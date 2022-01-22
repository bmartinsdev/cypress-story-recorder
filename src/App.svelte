<script lang="ts">
	import Tailwind from "./lib/Tailwind.svelte";
	import { onMount } from "svelte";
	import DomScanner from "./util/DomScanner";
	import Debugger from "./util/Debugger.svelte";
	import logs from "./stores/Logger";

	const devMode = true;

	let ready = false;
	const dom = new DomScanner();

	onMount(() => {
		ready = true;
		logs.add("test");
	});
</script>

<main>
	{#if ready}
		Svelte + typescript + tailwind boilerplate
		<button on:click={() => logs.add("wtv")}>test</button>
	{/if}
	{#if devMode}
		<Debugger />
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
