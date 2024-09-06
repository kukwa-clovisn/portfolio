// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@element-plus/nuxt", "@nuxt/ui", "@nuxt/image", "nuxt-nodemailer"],
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
  css: [
    // SCSS file in the project
    "~/assets/styles/main.scss",
  ],

  nodemailer: {
    from: process.env.NUXT_NODEMAILER_FROM,
    host: "smtp.mailtrap.io",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NUXT_NODEMAILER_FROM,
      pass: process.env.NUXT_NODEMAILER_AUTH_PASS,
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
