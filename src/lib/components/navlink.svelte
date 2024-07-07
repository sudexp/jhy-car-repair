<script lang="ts">
	import { getNavlinkColor } from '$lib/utils';

	export let isRootPath: boolean | undefined = undefined; // undefined is used for drawer links
	export let href: string;
</script>

<li class="p-0 m-0">
	<a {href} class="p3 no-underline {getNavlinkColor(isRootPath)}"><slot /></a>
</li>
