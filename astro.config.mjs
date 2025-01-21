// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";

import path from "node:path";

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
	experimental: {
		svg: true,
	},
	integrations: [tailwind()],
	vite: {
		resolve: {
			alias: {
				"@components": path.resolve("./src/components"),
				"@assets": path.resolve("./src/assets"),
			},
		},
	},
});
