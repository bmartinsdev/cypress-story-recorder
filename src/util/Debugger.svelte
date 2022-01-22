<script lang="ts">
    import logs from "../stores/Logger";
</script>

{#if $logs?.length}
    <ul>
        {#each $logs as log}
            <li>
                {log}
            </li>
        {/each}
    </ul>
{/if}

<style>
</style>
