// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["bootstrap/dist/css/bootstrap.min.css", "assets/css/main.sass"],
    app: {
        head: {
            script: ["@/assets/js/bootstrap.bundle.min.js"]
        }
    }
})
