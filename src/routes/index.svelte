<script>
	import { onMount } from 'svelte';
	let isLoading = true;
	
	var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "web3_clientVersion",
  "params": [],
  "id": 1
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
	
let servers = [
		{ id: 'test', name: 'Nahmii Testnet', url: "https://l2-tc3.test.nahmii.net"},
		{ id: 'ropsten', name: 'Nahmii Ropsten', url: "https://l2.testnet.nahmii.io"},
		{ id: 'mainnet', name: 'Nahmii Mainnet', url: "https://path/to/mainnet"}
	];

// collection of statuses
export let statuses = [];

	async function getServers(servers) {
		
			for (let server of servers) { 
// 			console.log(server);

				statuses = [...statuses, await getServerVersion(server)];
			}
			console.log(statuses);
	} 
	
	async function getServerVersion(server) {
// 		console.log(server.url)
		let res, json;
		try {
			res = await fetch(server.url, requestOptions);
			json = await res.json();
		} catch {
			return {status: false, name: server.name};
		}
		if (res.ok) {
			return {status: true, name: server.name};
		} else {
			return {status: false, name: server.name};
// 			throw new Error(json);
		}
	}
	onMount( async() => {
		await getServers(servers);
// 		console.log(statuses);
		isLoading = false;
	});
</script>

<h1 style="font-style: italic">
	System Status
</h1>

{#if isLoading}
	<p>...waiting</p>
{:else}
{#each statuses as {status, name}}
{#if status}
	<p class="good_status">{name}: Operational! </p>
{:else}
	<p class="bad_status">{name}: System down!</p>
{/if}
{/each}
{/if}


<style>
	.good_status {
		width: 100%;
		color: green;
		margin: 5
	}

	.bad_status {
		width: 100%;
		color: red;
		margin: 5;
	}
</style>