import type { ComponentType } from 'svelte';

export interface NavItem {
	name: string;
	href: string;
}

export interface Service {
	id: number;
	title: string;
	component: ComponentType;
}
