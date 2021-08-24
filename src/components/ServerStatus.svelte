<script>
    export let stats;
    $: console.log(`stats: ${stats}`);
</script>

{#each stats as {status, name}, i}
    <div class="status_line">
        <p class="service_name">{name}:</p>
        {#if status}
            <span class="good_status">Up!</span> 
        {:else}
            <span class="bad_status">Down!</span>
        {/if}
        
    </div>
    {#if i < stats.length - 1}
        <hr class=status_line_seperator>
    {/if}
{/each}

<style>
.status_line {
    display: flex; 
    flex-direction: row
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
    color: #00CC39;
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
.status_line_seperator {
    
    height: 0px;
    left: 0%;
    right: 0%;
    top: 107px;

/* Light Grey 1 */

    border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>