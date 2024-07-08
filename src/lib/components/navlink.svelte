<script lang="ts">
	import { page } from '$app/stores';
	import { getNavlinkColor, getNavlinkIsSelected } from '$lib/utils';

	export let isRootPath: boolean | undefined = undefined; // undefined is used for drawer links
	export let href: string;

	let isSelected: boolean;

	$: isSelected = $page.url.pathname === href;
</script>

<li class="p-0 m-0">
	<a
		{href}
		class="{getNavlinkIsSelected(isSelected)} no-underline py-1.5 px-2 {getNavlinkColor(
			isRootPath
		)}"><slot /></a
	>
</li>
