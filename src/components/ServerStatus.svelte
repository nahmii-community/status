<script>
    export let statuses;
    $: console.log(`statuses: ${statuses}`);
</script>

{#each statuses as { status, name }, i}
    <div class="status-line">
        <p class="service-name">{name}:</p>
        {#if status}
            <span class="good-status">Up!</span>
        {:else}
            <span class="bad-status">Down!</span>
        {/if}
    </div>
{/each}

<style>
    .status-line {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding-bottom: 0.75em;
    }

    .status-line:last-child {
        border-bottom: none;
    }

    .service-name {
        width: 100%;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.15px;
        /* Dark Blue */
        color: #495264;
        /* color: aliceblue */
    }

    .good-status, .bad-status {
        width: 50%;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.15px;
        margin: auto;
        padding-left: 1rem;
        text-align: right;
    }

    .good-status {
        color: #00cc39;
    }

    .bad-status {
        color: red;
    }
</style>
