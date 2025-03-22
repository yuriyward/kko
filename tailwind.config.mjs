import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: {
					eggnog: "#FEE7A3",
					lagoon: "#6C8FE6",
					cotton: "#F5F0EB",
					wood: "#A68E6C",
					smoke: "#AFACA2",
				},
				secondary: {
					night: "#2A2A2A",
					ghost: "#FFFFFF",
				},
				shades: {
					"lagoon-75": "#91ABEC",
					"lagoon-50": "#B6C7F3",
					"lagoon-30": "#D3DDF8",
					"lagoon-20": "#E2E9FA",
					"eggnog-75": "#FEEDBA",
					"eggnog-50": "#FFF3D1",
					"eggnog-30": "#FFF8E3",
				},
			},
			fontFamily: {
				sans: ["Nunito Variable", ...defaultTheme.fontFamily.sans],
				amatic: ["Amatic SC", "Caveat", "Indie Flower", "cursive"],
			},
			fontSize: {
				displayXLarge: ["128px", { lineHeight: "1.5", fontWeight: "800" }], // 800 corresponds to ExtraBold
				displayLarge: ["112px", { lineHeight: "0.8", fontWeight: "800" }],
				displayMedium: ["48px", { lineHeight: "1.2", fontWeight: "800" }],
				displaySmall: ["36px", { lineHeight: "44px", fontWeight: "800" }],
				displayXSmall: ["32px", { lineHeight: "1.2", fontWeight: "300" }], // 300 corresponds to Light
				heading: ["28px", { lineHeight: "1.5", fontWeight: "700" }], // 700 corresponds to Bold
				body: ["28px", { lineHeight: "1.3", fontWeight: "400" }], // 400 corresponds to Regular
				caption: ["20px", { lineHeight: "1.2", fontWeight: "400" }],
				captionSmall: ["16px", { lineHeight: "1.2", fontWeight: "400" }],
				badge: ["20px", { lineHeight: "1.2", fontWeight: "700" }], // 700 corresponds to Bold
				button: ["20px", { lineHeight: "1.2", fontWeight: "400" }], // 400 corresponds to Regular
				number: ["20px", { lineHeight: "1.2", fontWeight: "500" }], // 500 corresponds to Medium
			},
		},
	},
	plugins: [],
};
