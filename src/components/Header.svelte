<script>
	// import { page } from "$app/stores";
	import logo from "../../static/nahmii-logo-colour-negative-100px-h.png"; 
	// import DarkModeToggle from "./DarkModeToggle.svelte";
</script>

<header>
	<div class="corner">
		<a href="https://nahmii.io">
			<img src={logo} alt="Nahmii" />
		</a>
	</div>
</header>

<style>
	header {
		padding: 0.75em;
		display: flex;
		justify-content: space-between;
		margin-bottom: 3.25em;
	}

	.corner {
		width: 3em;
		height: 3em;
		display: flex;
		align-self: center;
	}

	.corner img {
		width: 9em;
		height: 3em;
		object-fit: contain;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
