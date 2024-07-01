/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {},
		screens: {
			// xs: '0px',
			sm: '620px',
			md: '900px',
			lg: '1200px',
			xl: '1536px'
		}
	},
	plugins: [require('daisyui')], // eslint-disable-line @typescript-eslint/no-require-imports
	daisyui: {
		themes: [
			{
				custom: {
					// red
					primary: '#d90429', // dark
					secondary: '#ef233c', // light
					// typography
					neutral: '#edf2f4', // light
					accent: '#141414', // dark
					// backgrounds
					'base-100': '#edf2f4', // light
					'base-200': '#8d99ae', // middle
					'base-300': '#2b2d42' // dark
				}
			}
		]
	}
};
