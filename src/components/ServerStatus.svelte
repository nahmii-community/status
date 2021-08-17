<script>
    export let stats;
    $: console.log(`stats: ${stats}`);
</script>

{#each stats as {status, name}}
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
    flex-direction: row
}
.service_name {
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
    width: 100%;
    color: #00CC39;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.15px;
    margin: auto;
    padding-left: 1rem
}

.bad_status {
    width: 100%;
    color: red;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.15px;
    margin: auto;
    padding-left: 1rem
}
</style>