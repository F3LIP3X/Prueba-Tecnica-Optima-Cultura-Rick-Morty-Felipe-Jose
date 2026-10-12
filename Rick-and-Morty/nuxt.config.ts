export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  app: {
    baseURL: '/Prueba-Tecnica-Optima-Cultura-Rick-Morty-Felipe-Jose/',
    head: {
      title: 'Rick and Morty',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/Prueba-Tecnica-Optima-Cultura-Rick-Morty-Felipe-Jose/favicon.ico' }
      ]
    }
  }
})
