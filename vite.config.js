import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				index: "./app/index.html",
				about: "./app/about/index.html",
				element: "./app/element/index.html",
			},
		},
		outDir: "../dist",
	},
	root: "app",
	// publicDir: "public"
});
