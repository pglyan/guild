import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

const SRC = path.join(import.meta.dirname, "src");

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "#": SRC,
    },
  },
  css: {
    transformer: "lightningcss",
  },
});
