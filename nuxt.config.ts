// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: false },

    future: {
        compatibilityVersion: 4,
    },

    app: {
        head: {
            htmlAttrs: {
                lang: "en",
            },
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
        },
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ["~/assets/fonts/stylesheet.css", "~/assets/css/master.css", "~/assets/css/custom.css"],
    carousel: {
        prefix: "vue3",
    },
    modules: ["@nuxt/image", "nuxt-swiper", "nuxt-icons", "vue3-carousel-nuxt"],

    ssr: true,
});
