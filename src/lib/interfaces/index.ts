import type { ComponentType } from 'svelte';

export type DispatchFunction = (eventName: string) => void;
export interface NavItem {
	name: string;
	href: string;
}

export interface Service {
	id: number;
	title: string;
	component: ComponentType;
}
