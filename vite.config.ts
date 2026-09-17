import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";

export default defineConfig({
  plugins: [glsl()],
  server: {
    port: 5000,
    open: true,
    strictPort: true,
  },
});
