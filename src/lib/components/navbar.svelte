<script lang="ts">
	import { navItems } from '../utils';
	import Logo from './logo.svelte';
	import Navlink from './navlink.svelte';
	import MenuIcon from '$lib/svg/menuIcon.svelte';

	export let isRootPath: boolean;
</script>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<div class="navbar w-full p-0">
			<div class="flex-none sm:hidden">
				<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<MenuIcon />
				</label>
			</div>
			<div class="hidden mx-2 flex-1 px-2 sm:block"><Logo {isRootPath} /></div>
			<div class="hidden flex-none sm:block">
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
			<Logo {isRootPath} isDrawer={true} />
			<ul class="p-4 m-0">
				{#each navItems as item}
					<Navlink href={item.href}>{item.name}</Navlink>
				{/each}
			</ul>
		</div>
	</div>
</div>
