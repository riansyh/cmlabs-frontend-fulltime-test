// https://v3.nuxtjs.org/api/configuration/nuxt.config
const APP_META = {
    title: "Foodies",
    description: "Food ingredients & meal apps",
};

export default defineNuxtConfig({
    app: {
        rootId: APP_META.title,
        rootTag: "body",
        head: {
            title: APP_META.title,
            titleTemplate: `%s - ${APP_META.title}`,
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { hid: "description", name: "description", content: APP_META.description },
                { name: "format-detection", content: "telephone=no" },
            ],
        },
    },

    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    components: {
        dirs: [
            {
                path: "~/components",
                pathPrefix: false,
            },
        ],
    },

    modules: ["@nuxt/image-edge"],
});
