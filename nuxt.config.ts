// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["nuxt-icon", "@nuxtjs/google-fonts", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  router: {
    base: "/BrawlStar_web_20240122",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      "Noto+Sans+TC": {
        wght: "100..800",
      },
      Ubuntu: {
        wght: "300..700",
      },
    },
  },
});
