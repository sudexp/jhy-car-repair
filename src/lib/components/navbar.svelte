<script lang="ts">
	import { getMenuIconColor, navItems } from '../utils';
	import Logo from './logo.svelte';
	import Navlink from './navlink.svelte';
	import MenuIcon from '$lib/images/svg/menuIcon.svelte';

	export let isRootPath: boolean;
</script>

<div class="drawer layout-spacing sm:mb-6">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<div class="navbar w-full p-0">
			<div class="flex-none sm:hidden">
				<label
					for="my-drawer-3"
					aria-label="open sidebar"
					class="btn btn-square btn-ghost {getMenuIconColor(isRootPath)}"
				>
					<MenuIcon />
				</label>
			</div>
			<div class="hidden flex-1 sm:block"><Logo {isRootPath} /></div>
			<div class="hidden flex-none sm:block sm:-mr-2">
				<ul class="menu menu-horizontal m-0 p-0">
					{#each navItems as item}
						<Navlink {isRootPath} href={item.href}>{item.name}</Navlink>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay" />
		<div class="menu bg-base-100 min-h-full w-80 p-0">
			<div class="p-4">
				<Logo {isRootPath} isDrawer={true} />
			</div>
			<hr class="m-0" />
			<ul class="px-0 py-2">
				{#each navItems as item}
					<Navlink href={item.href}>{item.name}</Navlink>
				{/each}
			</ul>
		</div>
	</div>
</div>
