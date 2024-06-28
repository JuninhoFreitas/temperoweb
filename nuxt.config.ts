// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		"@nuxtjs/tailwindcss",
		"@primevue/nuxt-module",
		"@nuxtjs/color-mode",
	],
	primevue: {
		importTheme: { from: "@/themes/my-theme.js" },
		components: {
			exclude: ["Editor", "Chart"],
		},
	},
	css: ["~/assets/css/tailwind.css", "primeicons/primeicons.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	colorMode: {
		preference: "light",
		fallback: "light",
	},
});
