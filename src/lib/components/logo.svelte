<script>
	import { page } from '$app/stores';
	import LogoSvg from '$lib/svg/logoImage.svelte';
	import { getIsRootPath } from './utils';

	let isRootPath;

	$: isRootPath = getIsRootPath($page.url.pathname);
</script>

{#if isRootPath}
	<div class="text-secondary">
		<LogoSvg />
	</div>
{:else}
	<a href="/" class="text-secondary">
		<LogoSvg />
	</a>
{/if}
