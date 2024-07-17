<script lang="ts">
	import LogoSvg from '$lib/images/svg/logoSvg.svelte';
	import { getDrawerLogoColor } from '$lib/utils';

	export let isRootPath: boolean;
	export let isDrawer: boolean | undefined = false;

	const handleClick = () => {
		const drawerLabel = document.getElementById('my-drawer-3');

		if (drawerLabel && isDrawer) {
			drawerLabel.click();
		}
	};
</script>

{#if isRootPath}
	<div class={getDrawerLogoColor(isDrawer)}>
		<LogoSvg />
	</div>
{:else}
	<a href="/" class="text-secondary" on:click={handleClick}>
		<LogoSvg />
	</a>
{/if}
