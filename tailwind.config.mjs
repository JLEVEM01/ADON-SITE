import { transform } from "typescript";

const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
	content: {
		relative: true,
		transform: (content) => content.replace(/taos:/g, ''),
		files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
			"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
			"./node_modules/flowbite/**/*.js"
		],
	},
	theme: {
		extend: {
			screens: {
				'ssm': '345px'
			},
			animation: {
				'loop-scroll': 'loop-scroll 50s linear infinite',
				"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
				marquee: "marquee var(--duration) linear infinite",
				"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
			},
			spacing: {
				'500': '35rem',
				'700': '120rem'
			},
			keyframes: {
				'loop-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
				"shine-pulse": {
					"0%": {
						"background-position": "0% 0%",
					},
					"50%": {
						"background-position": "100% 100%",
					},
					to: {
						"background-position": "0% 0%",
					},
				},
				"border-beam": {
					"100%": {
						"offset-distance": "100%",
					},
				},
				marquee: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				},
				"marquee-vertical": {
					from: { transform: "translateY(0)" },
					to: { transform: "translateY(calc(-100% - var(--gap)))" },
				},

			},
			backgroundImage: {
				"puntosIndex": "url('/public/Img/Backgrounds/bgPuntos.jpg')",
				"Facturacion": "url('/public/Img/Backgrounds/bgFacturacion.jpg')",
				"Nomina": "url('/public/Img/Backgrounds/bgNomina.jpg')",
				"Rav": "url('/public/Img/Backgrounds/bgRAV.jpg')",
				"Contabilidad": "url('/public/Img/Backgrounds/bgContabilidad.jpg')",
				"Index": "url('/public/Img/Backgrounds/bgIndex.jpg')",
				"Gubernamental": "url('/public/Img/Backgrounds/bgGubernamental.jpg')",
				"Autofacturacion": "url('/public/Img/Backgrounds/bgAutofacturacion.jpg')",
				"Addendas": "url('/public/Img/Backgrounds/bgAddendas.jpg')",
				"Footer": "url('/public/Img/Backgrounds/bgFooter.jpg')",
				"Wave": "url('/public/Img/Backgrounds/wavegray.png')",
				"AccesoClientes": "url('/public/Img/Backgrounds/bgAccesoClientes.jpg')",
				"Contacto": "url('/public/Img/Backgrounds/bgContacto.jpg')"


			},
			screens: {
				"1xl": "1500px"
			}
		},
	},
	safelist: [
		'!duration-[0ms]',
		'!delay-[0ms]',
		'html.js :where([class*="taos:"]:not(.taos-init))'
	],
	plugins: [
		nextui(),
		require('flowbite/plugin'),
		require('taos/plugin')
	],
}


