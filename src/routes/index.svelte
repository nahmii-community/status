<script>
	import { onMount } from "svelte";
	import Card from "../components/Card.svelte";
	import GradientTitle from "../components/GradientTitle.svelte";
	import Header from "../components/Header.svelte";
	import ServerStatus from "../components/ServerStatus.svelte";
	import "../app.css";

	let isLoading = true;

	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var raw = JSON.stringify({
		jsonrpc: "2.0",
		method: "web3_clientVersion",
		params: [],
		id: 1,
	});

	var requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	};

	var htmlHeaders = new Headers();
	htmlHeaders.append("Content-Type", "application/html");

	var getHtmlRequestOptions = {
		method: "GET",
		headers: htmlHeaders,
		redirect: "follow",
	};

	let servers = [
		// { id: 'test', name: 'Nahmii Testnet', url: "https://l2-tc3.test.nahmii.net"},
		{
			id: "mainnet-node",
			name: "Mainnet Node",
			url: "https://l2.nahmii.io",
			options: requestOptions,
		},
		{
			id: "mainnet-explorer",
			name: "Mainnet Explorer",
			url: "https://explorer.nahmii.io",
			options: getHtmlRequestOptions,
		},
		{
			id: "mainnet-meta-service",
			name: "Mainnet Meta Service",
			url: "https://meta.nahmii.io",
			options: getHtmlRequestOptions,
		},
		{
			id: "testnet-node",
			name: "Testnet Node",
			url: "https://l2.testnet.nahmii.io",
			options: requestOptions,
		},
		{
			id: "testnet-explorer",
			name: "Testnet Explorer",
			url: "https://explorer.testnet.nahmii.io",
			options: getHtmlRequestOptions,
		},
		{
			id: "testnet-meta-service",
			name: "Testnet Meta Service",
			url: "https://meta.testnet.nahmii.io",
			options: getHtmlRequestOptions,
		},
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
			return { status: false, name: server.name, description: server.description };
		}
		if (res.ok) {
			return { status: true, name: server.name };
		} else {
			return { status: false, name: server.name, description: server.description };
		}
	}

	onMount(async () => {
		await getServers(servers);
		isLoading = false;
	});
</script>

<Header />
<div class="container">
	<Card>
		<div class="title">
			<GradientTitle
				marginTop="0"
				marginBottom="0"
				fontSize="26px"
				fontWeight="700"
				letterSpacing="0.8px">Nahmii Status</GradientTitle
			>
		</div>
		{#if isLoading}
			<p class="waiting">...waiting</p>
		{:else}
			<ServerStatus {statuses} />
		{/if}
	</Card>
</div>

<style>
	.container {
		display: flex;
		max-width: 500px;
		margin: auto;
		padding: 0 1em 4em 1em;
	}

	.title {
		margin-bottom: 1em;
	}

	.waiting {
		font-family: Roboto;
		font-style: normal;
		font-weight: bold;
		font-size: 26px;
		line-height: 20px;
		color: aliceblue;
	}
</style>
