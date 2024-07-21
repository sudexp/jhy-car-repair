// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	interface Window {
		dataLayer: IArguments[];

		/* eslint-disable @typescript-eslint/no-explicit-any */
		gtag?: (...args: any[]) => void;
	}
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

declare interface Window {
	dataLayer: IArguments[];

	/* eslint-disable @typescript-eslint/no-explicit-any */
	gtag?: (...args: any[]) => void;
}
