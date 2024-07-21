<script lang="ts">
	import { getMenuIconColor, navItems } from '../utils';
	import Logo from './logo.svelte';
	import Navlink from './navlink.svelte';
	import MenuIcon from '$lib/images/svg/menuIcon.svelte';

	export let isRootPath: boolean;

	let isDrawerOpened = false;

	const openDrawer = () => {
		true;
	};

	const closeDrawer = () => {
		isDrawerOpened = false;
	};
</script>

<div class="drawer navbar-spacing">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" bind:checked={isDrawerOpened} />
	<div class="drawer-content flex flex-col">
		<div class="navbar w-full p-0 min-h-14 sm:min-h-16">
			<div class="flex-none sm:hidden">
				<button
					aria-label="open sidebar"
					class="btn btn-circle btn-ghost min-h-10 h-10 w-10 -ml-2 {getMenuIconColor(isRootPath)}"
					on:click={openDrawer}
				>
					<label for="my-drawer-3">
						<MenuIcon />
					</label>
				</button>
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
	<div class="drawer-side z-10000">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay" />
		<div class="menu bg-base-100 min-h-full w-80 p-0">
			<div class="p-4">
				<Logo {isRootPath} isDrawer={true} on:closeDrawer={closeDrawer} />
			</div>
			<hr class="m-0" />
			<ul class="px-0 py-2 m-0">
				{#each navItems as item}
					<Navlink isDrawer={true} href={item.href} on:closeDrawer={closeDrawer}
						>{item.name}</Navlink
					>
				{/each}
			</ul>
		</div>
	</div>
</div>
