/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')], // eslint-disable-line @typescript-eslint/no-require-imports
	daisyui: {
		themes: []
	}
};
