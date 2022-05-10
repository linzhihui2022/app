import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    output: {
      dir: "output",
      serverDir: "output/server",
      publicDir: "output/public",
    },
  },
});
