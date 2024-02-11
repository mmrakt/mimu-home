import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
  manifest_version: 3,
  name: "mimu-home",
  version: "0.1.0",
  description: "mimu's custom browser home",
  background: {
    service_worker: "src/scripts/background.ts",
    type: "module",
  },
  permissions: ["storage", "tabs", "notifications"],
  // chrome_url_overrides: {
  //   newtab: "new-tab.html",
  // },
  options_page: "new-tab.html",
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  build: {
    target: "esnext",
  },
});
