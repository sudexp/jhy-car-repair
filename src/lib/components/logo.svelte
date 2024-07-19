<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import LogoSvg from '$lib/images/svg/logoSvg.svelte';
	import { getDrawerLogoColor, closeDrawerDispatchFunction } from '$lib/utils';

	export let isRootPath: boolean;
	export let isDrawer: boolean | undefined = false;

	const dispatch = createEventDispatcher();
</script>

{#if isRootPath}
	<div class={getDrawerLogoColor(isDrawer)}>
		<LogoSvg />
	</div>
{:else}
	<a href="/" class="text-secondary" on:click={closeDrawerDispatchFunction(dispatch)}>
		<LogoSvg />
	</a>
{/if}
