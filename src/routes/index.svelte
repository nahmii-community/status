<script>
	import ServerStatus from '../components/ServerStatus.svelte';
	import Header from '../components/Header.svelte';
	import {onMount} from 'svelte';

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

	var htmlHeaders = new Headers();
	htmlHeaders.append("Content-Type", "application/html");

	var getHtmlRequestOptions = {
		method: 'GET',
		headers: htmlHeaders,
		redirect: 'follow'
	}

	let servers = [
		// { id: 'test', name: 'Nahmii Testnet', url: "https://l2-tc3.test.nahmii.net"},
		{
			id: 'mainnet-node',
			name: 'Mainnet Node',
			url: "https://path/to/mainnet/node",
			options: requestOptions
		},
		{
			id: 'mainnet-explorer',
			name: 'Mainnet Explorer',
			url: "https://path/to/mainnet/explorer",
			options: requestOptions
		},
		{
			id: 'mainnet-meta-service',
			name: 'Mainnet Meta Service',
			url: "https://path/to/mainnet/meta/service",
			options: requestOptions
		},
		{
			id: 'testnet-node',
			name: 'Testnet Node',
			url: "https://l2.testnet.nahmii.io",
			options: requestOptions
		},
		{
			id: 'testnet-explorer',
			name: 'Testnet Explorer',
			url: "https://explorer.testnet.nahmii.io",
			options: getHtmlRequestOptions
		},
		{
			id: 'testnet-meta-service',
			name: 'Testnet Meta Service',
			url: 'https://meta.testnet.nahmii.io',
			options: getHtmlRequestOptions
		}
	];

	// collection of statuses
	export let statuses = [];

	async function getServers(servers) {

		for (let server of servers) {
			statuses = [...statuses, await getServerVersion(server)];
		}
	}

	async function getServerVersion(server) {
		let res, json;
		try {
			res = await fetch(server.url, server.options);
			console.log(server.name, res);
			// json = await res.json();
		} catch {
			return {status: false, name: server.name};
		}
		if (res.ok) {
			return {status: true, name: server.name};
		} else {
			return {status: false, name: server.name};
		}
	}

	onMount(async () => {
		await getServers(servers);
		console.log(statuses);
		isLoading = false;
	});
</script>
<!-- svelte-ignore a11y-missing-attribute -->
<html class="nahmii-scaling-ethereum-background">
<body>
<Header/>
<div class="status_card">
	<div class="status_card_frame">
		<h1 class="status_title">
			Nahmii Status
		</h1>
		{#if isLoading}
			<p class="waiting">...waiting</p>
		{:else}
			<ServerStatus stats={statuses}/>
		{/if}
	</div>
</div>
</body>
</html>

<style>
	/* status card */
	.status_card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 32px;
		position: absolute;
		width: 450px;
		height: 530px;
		left: calc(50% - 450px / 2);
		top: 160px;
		/* White */
		background: #FFFFFF;
		/* Shadow */
		box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
		border-radius: 12px;
	}

	.status_card_frame {
		position: static;
		width: 386px;
		height: 315px;
		left: 32px;
		top: 32px;

		/* Inside Auto Layout */
		flex: none;
		order: 0;
		align-self: stretch;
		flex-grow: 1;
		margin: 0px 10px;
		/* color:black;
        border-color: black;
        border-width: 5px; */
	}

	/* Nahmii Status title */
	.status_title {
		background: -webkit-linear-gradient(45deg,#FF44C9 0%, #00B8FA 100%);
		background-clip: unset;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		/* position: absolute; */
		width: 167px;
		height: 20px;
		left: 0px;
		top: 0px;

		font-family: Roboto;
		font-style: normal;
		font-weight: bold;
		font-size: 26px;
		line-height: 20px;
		/* identical to box height, or 77% */

		letter-spacing: 0.15px;
	}

	.waiting {
		font-family: Roboto;
		font-style: normal;
		font-weight: bold;
		font-size: 26px;
		line-height: 20px;
		/* identical to box height, or 77% */
		color: aliceblue
	}

	/* nahmii-scaling-ethereum-background 1 */
	.nahmii-scaling-ethereum-background {
		position: absolute;
		height: 100vh;
		left: 0%;
		right: 0.04%;
		top: 0px;
		background: url("../../static/nahmii-scaling-ethereum-background.png");
		background-size: cover;
	}
</style>