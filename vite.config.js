import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
	manifest: {
		start_url: "/",
		display: "standalone",
		name: "May Englsish Tchaï",
		short_name: "May Englsish Tchaï",
		description: "Apprendre d'autres langues autour d'un thé",
		theme_color: "#1976d2",
		background_color: "#fafafa",
		scope: "/",
		splash_pages: null,
		orientation: "portrait",
		icons: [
			{
				src: "img/icons/icon-48x48.png",
				sizes: "48x48",
				type: "image/png",
				purpose: "maskable any",
			},
			{
				src: "img/icons/icon-72x72.png",
				sizes: "72x72",
				type: "image/png",
				purpose: "maskable any",
			},
			{
				src: "img/icons/icon-96x96.png",
				sizes: "96x96",
				type: "image/png",
				purpose: "maskable any",
			},
			{
				src: "img/icons/icon-128x128.png",
				sizes: "128x128",
				type: "image/png",
				purpose: "maskable any",
			},
			{
				src: "img/icons/icon-144x144.png",
				sizes: "144x144",
				type: "image/png",
				purpose: "maskable any",
			},
			{
				src: "img/icons/icon-152x152.png",
				sizes: "152x152",
				type: "image/png",
				purpose: "maskable any",
			},
			{
				src: "img/icons/icon-192x192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "maskable any",
			},
			{
				src: "img/icons/icon-384x384.png",
				sizes: "384x384",
				type: "image/png",
				purpose: "maskable any",
			},
			{
				src: "img/icons/icon-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable any",
			},
		],
	},
};

// https://vitejs.dev/config/
export default defineConfig({
	registerType: "autoUpdate",
	includeAssets: [
		"favicon.ico",
		"apple-touch-icon.png",
		"maskable_icon_x128.png",
	],
	devOptions: {
		enabled: true,
	},
	base: "./",
	plugins: [react(), VitePWA(manifestForPlugin)],
});
