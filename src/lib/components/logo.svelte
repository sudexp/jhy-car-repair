<script lang="ts">
	import LogoSvg from '$lib/svg/logoImage.svelte';
	import { getDrawerLogoColor } from '$lib/utils';

	export let isRootPath: boolean;
	export let isDrawer: boolean | undefined = false;
</script>

{#if isRootPath}
	<div class={getDrawerLogoColor(isDrawer)}>
		<LogoSvg />
	</div>
{:else}
	<a href="/" class="text-secondary">
		<LogoSvg />
	</a>
{/if}
