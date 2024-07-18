import type { ComponentType } from 'svelte';

export interface Service {
	id: number;
	title: string;
	component: ComponentType;
}
