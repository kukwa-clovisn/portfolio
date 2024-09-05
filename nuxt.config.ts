// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@element-plus/nuxt", "@nuxt/ui", "@nuxt/image"],
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
  css: [
    // SCSS file in the project
    "~/assets/styles/main.scss",
  ],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
