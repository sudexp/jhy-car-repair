<script>
	import { getNavlinkColor } from '$lib/utils';

	export let isRootPath = undefined; // undefined is used for drawer links
	export let href;
</script>

<li>
	<a {href} class="no-underline {getNavlinkColor(isRootPath)}"><slot /></a>
</li>
