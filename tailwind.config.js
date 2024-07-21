/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		fontFamily: {
			sans: ['Helvetica', 'Arial', 'sans-serif']
		},
		fontSize: {
			sm: '14px',
			base: '16px',
			xl: '20px',
			'2xl': '22px'
		},
		extend: {
			zIndex: {
				10000: '10000'
			},
			typography: {
				DEFAULT: {
					css: {
						fontSize: '14px',
						h1: {
							fontSize: '36px',
							fontWeight: 400,
							lineHeight: '42px',
							margin: 0
						},
						h2: {
							fontSize: '24px',
							fontWeight: 400,
							lineHeight: '30px',
							margin: 0
						},
						p: {
							margin: 0
						}
					}
				},
				md: {
					css: {
						h1: {
							fontSize: '64px',
							lineHeight: '70px'
						},
						h2: {
							fontSize: '32px',
							lineHeight: '38px'
						}
					}
				}
			}
		},
		screens: {
			// xs: '0px',
			sm: '620px',
			md: '900px',
			lg: '1200px',
			xl: '1536px'
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')], // eslint-disable-line @typescript-eslint/no-require-imports
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
