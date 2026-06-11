import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const isBuild = process.argv.includes("build");

const rawPort = process.env.PORT;
if (!isBuild) {
  if (!rawPort) {
    throw new Error("PORT environment variable is required but was not provided.");
  }
  const parsedPort = Number(rawPort);
  if (Number.isNaN(parsedPort) || parsedPort <= 0) {
    throw new Error(`Invalid PORT value: "${rawPort}"`);
  }
}
const port = Number(rawPort) || 3000;

const basePath = process.env.BASE_PATH;
if (!isBuild && !basePath) {
  throw new Error("BASE_PATH environment variable is required but was not provided.");
}

const isReplit = process.env.REPL_ID !== undefined;

export default defineConfig({
  base: basePath ?? "/",
  plugins: [
    react(),
    tailwindcss(),
    ...(isReplit && process.env.NODE_ENV !== "production"
      ? [
          (await import("@replit/vite-plugin-runtime-error-modal")).default(),
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
