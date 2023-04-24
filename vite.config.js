import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/voog-mockup/",
	resolve: {
		alias: {
			"./": path.resolve(__dirname, "./src"),
		},
	},
});
