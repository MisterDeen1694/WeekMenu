// @ts-check
import { defineConfig } from "astro/config";

import db from "@astrojs/db";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
	integrations: [db()],
	adapter: netlify(),
	output: "server",
});
