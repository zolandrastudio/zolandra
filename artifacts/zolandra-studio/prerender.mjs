import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function prerender() {
  const { render } = await import("./dist/server/entry-server.js");

  const template = readFileSync(
    resolve(__dirname, "dist/public/index.html"),
    "utf-8"
  );

  const appHtml = render();

  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  writeFileSync(resolve(__dirname, "dist/public/index.html"), html);
  console.log("Pre-rendered: /");
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
