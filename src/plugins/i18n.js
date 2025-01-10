import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-tw',
  fallbackLocale: 'zh-tw',
  globalInjection: true,
  messages
})

export default i18n
