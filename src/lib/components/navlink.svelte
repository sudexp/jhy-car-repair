<script lang="ts">
	import { page } from '$app/stores';
	import {
		getNavlinkColor,
		getNavlinkIsSelected,
		getNavlinkPx,
		getNavlinkPy,
		handleClick
	} from '$lib/utils';

	export let isRootPath: boolean | undefined = undefined;
	export let isDrawer: boolean | undefined = undefined;
	export let href: string;

	let isSelected: boolean;

	$: isSelected = $page.url.pathname === href;
</script>

<li class="p-0 m-0">
	<a
		{href}
		class="no-underline {getNavlinkIsSelected(isSelected)} {getNavlinkPy(isDrawer)} {getNavlinkPx(
			isDrawer
		)} {getNavlinkColor(isRootPath)}"
		on:click={handleClick(isDrawer)}><slot /></a
	>
</li>
