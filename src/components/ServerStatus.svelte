<script>
    export let stats;
    $: console.log(`stats: ${stats}`);
</script>

{#each stats as { status, name }, i}
    <div class="status_line">
        <p class="service_name">{name}:</p>
        {#if status}
            <span class="good_status">Up!</span>
        {:else}
            <span class="bad_status">Down!</span>
        {/if}
    </div>
{/each}

<style>
    .status_line {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding-bottom: 0.75em;
    }

    .status_line:last-child {
        border-bottom: none;
    }

    .service_name {
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

    .good_status {
        width: 50%;
        color: #00cc39;
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

    .bad_status {
        width: 50%;
        color: red;
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
</style>
