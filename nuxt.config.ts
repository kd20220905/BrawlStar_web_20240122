// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["nuxt-icon", "@nuxtjs/google-fonts", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  app: {
    baseURL: "/BrawlStar_web_20240122",
    buildAssetsDir: "/static/",
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
