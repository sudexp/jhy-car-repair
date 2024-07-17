<script lang="ts">
	import LogoSvg from '$lib/images/svg/logoSvg.svelte';
	import { getDrawerLogoColor } from '$lib/utils';

	export let isRootPath: boolean;
	export let isDrawer: boolean | undefined = false;

	const handleClick = () => {
		const drawerLabel: HTMLElement | null = document.getElementById('my-drawer-3');
		const drawerSide: HTMLElement | null = document.querySelector(
			'.drawer-side > *:not(.drawer-overlay)'
		);

		if (drawerLabel && isDrawer) {
			drawerLabel.click();
			drawerLabel.style.transitionDuration = '0ms';
		}

		if (drawerSide && isDrawer) {
			drawerSide.style.transitionDuration = '0ms';
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
