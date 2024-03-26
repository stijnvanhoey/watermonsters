const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {},
		}
	},

	daisyui: {
		themes: [
			// light theme
			{
			  light: {
				...require("daisyui/src/theming/themes")["light"],
				"info": "#079cdf",
				"success": "#84d9ef",
				"warning": "#edc8bb",
				"error": "#e38d75",
			  },
			}
		]
	},

	plugins: [typography, daisyui]
};

module.exports = config;
