import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "app/index.html"),
				about: resolve(__dirname, "app/about/index.html"),
				element: resolve(__dirname, "app/element/index.html"),
			},
		},
		outDir: "../dist",
	},
	root: "app",
	// publicDir: "public"
});
