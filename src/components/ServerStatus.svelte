<script>
    export let statuses;
</script>

{#each statuses as { status, name, description }, i}
    <div class="status">
        <div class="status-line">
            <p class="service-name">{name}:</p>
            {#if status}
                <span class="good-status">Up!</span>
            {:else}
                <span class="bad-status">Down!</span>
            {/if}
        </div>
        <p class="status-description">{description ? description : ""}</p>
    </div>
{/each}

<style>
    .status {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding-bottom: 0.5em;
        margin-bottom: 0.5em;
    }

    .status:last-child {
        border-bottom: none;
        margin-bottom: 0;
    }

    .status-line {
        display: flex;
        flex-direction: row;
    }

    .status-line p {
        margin: 0.4em 0;
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

    .status-description {
        margin: 0;
        color: var(--text-color-medium-grey);
        font-size: 14px;
        min-height: 16px;
    }

    .status:last-child .status-description {
        min-height: 0;
    }

    .good-status,
    .bad-status {
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
