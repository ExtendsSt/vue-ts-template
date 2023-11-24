import { createI18n } from 'vue-i18n'
import type { VueApp } from '~/types'

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: '',
  messages: {},
})

// Setup Vue-i18n 国际化插件
// https://vue-i18n.intlify.dev
export const setupI18n: VueApp = (app) => {
  app.use(i18n)
  loadLanguageAsync('zh-CN')
}
