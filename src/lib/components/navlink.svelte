<script lang="ts">
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';
	import {
		getNavlinkColor,
		getNavlinkIsSelected,
		getNavlinkPx,
		getNavlinkPy,
		closeDrawerDispatchFunction
	} from '$lib/utils';

	export let isRootPath: boolean | undefined = false;
	export let isDrawer: boolean | undefined = false;
	export let href: string;

	const dispatch = createEventDispatcher();

	let isSelected: boolean;
	$: isSelected = $page.url.pathname === href;
</script>

<li class="p-0 m-0">
	<a
		{href}
		class="no-underline {getNavlinkIsSelected(isSelected)} {getNavlinkPy(isDrawer)} {getNavlinkPx(
			isDrawer
		)} {getNavlinkColor(isRootPath)}"
		on:click={closeDrawerDispatchFunction(dispatch)}><slot /></a
	>
</li>
