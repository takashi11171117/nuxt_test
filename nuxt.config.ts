import { Configuration } from '@nuxt/types'

const nuxtConfig: Configuration = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/composition-api', '@/plugins/firebase'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
    'nuxt-i18n'
  ],
  styleResources: {
    sass: ['@/assets/sass/variables.sass', '@/assets/sass/main.sass']
  },
  i18n: {
    locales: [
      {
        code: 'ja',
        iso: 'ja-JP',
        name: '日本語',
        file: 'ja-JP.js'
      }
    ],
    defaultLocale: 'ja',
    strategy: 'prefix_and_default',
    detectBrowserLanguage: {
      useCookie: true
    },
    lazy: true,
    langDir: 'common/i18n/',
    vueI18n: {
      fallbackLocale: 'ja'
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    host: 'localhost',
    port: 9100
  },
  vuetify: {
    customVariables: ['@/assets/sass/variables.sass'],
    treeShake: true
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },
  sassOptions: {
    indentedSyntax: true
  },
  /*
   ** Build configuration
   */
  build: {
    extend(config: any, ctx: any) {
      if (ctx.isDev && ctx.isClient) {
        if (!config.module) {
          return
        } // undefinedの場合、pushせずにreturnするように追加
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.(vert|frag)$/i,
        use: ['raw-loader']
      })
    }
  }
}

module.exports = nuxtConfig
