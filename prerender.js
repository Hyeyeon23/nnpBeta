// prerender.js
import pkg from "vite-plugin-html-prerender";
const { prerender } = pkg;

import path from "path";

const staticDir = path.join(process.cwd(), "dist");

await prerender({
    staticDir,
    routes: ["/", "/about/ceo"],
    selector: "main",
    minify: true,
    options: { timeout: 30000 }
});

console.log("Prerender complete!");
