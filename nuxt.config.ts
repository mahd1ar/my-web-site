import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // @ts-ignore
    devServer: {
        port: 3001,
    },

    // @ts-ignore
    app: {
        head: {
            title: "mahdiyar anari's personal website",
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' },
                {
                    name: 'google-site-verification',
                    content: '04BBSD9s7izff_2m1k0V5_vTYaZWrZUCm7QSQEIo9wo',
                },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
        // pageTransition: { name: 'transition-rainbow', mode: 'out-in' },
    },
    css: ['~/assets/css/main.scss'],

    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/device', '@pinia/nuxt', '@vueuse/nuxt'],

    devtools: {
        enabled: true,
    },
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
});