<script>
	import LogoSvg from '$lib/svg/logoImage.svelte';

	export let isRootPath;
</script>

{#if isRootPath}
	<div class="text-base-100">
		<LogoSvg />
	</div>
{:else}
	<a href="/" class="text-secondary">
		<LogoSvg />
	</a>
{/if}
