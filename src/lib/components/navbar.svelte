<script>
	import { navItems } from '../utils';
	import Logo from './logo.svelte';
	import Navlink from './navlink.svelte';
</script>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<div class="navbar w-full">
			<div class="flex-none sm:hidden">
				<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</label>
			</div>
			<div class="hidden mx-2 flex-1 px-2 sm:block"><Logo /></div>
			<div class="hidden flex-none sm:block">
				<ul class="menu menu-horizontal">
					{#each navItems as item}
						<Navlink href={item.href}>{item.name}</Navlink>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay" />
		<div class="menu bg-base-100 min-h-full w-80 p-0">
			<Logo />
			<ul class="p-4 m-0">
				{#each navItems as item}
					<Navlink href={item.href}>{item.name}</Navlink>
				{/each}
			</ul>
		</div>
	</div>
</div>
