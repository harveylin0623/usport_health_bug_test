import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'
import i18n from './plugins/i18n'
import 'element-plus/dist/index.css'
import '@/assets/scss/tailwind.scss'
import App from './App.vue'
import BaseButton from '@/components/Global/BaseButton/index.vue'
import SquareButton from '@/components/Global/SquareButton/index.vue'
import ApiModal from '@/components/Global/Modal/ApiModal.vue'
import Modal from '@/components/Global/Modal/Modal.vue'
import { directiveCurrency } from './directives/currency.js'
import { directiveFocus } from './directives/focus.js'
import { shadowHtml } from './directives/shadowDom.js'
import '@/assets/scss/elementPlus/index.scss'

const app = createApp(App)
const pinia = createPinia()
const head = createHead()

pinia.use(piniaPluginPersistedstate)
app.config.devtools = import.meta.env.DEV
app.directive('currency', directiveCurrency)
app.directive('focus', directiveFocus)
app.directive('shadowHtml', shadowHtml)
app.component('BaseButton', BaseButton)
app.component('SquareButton', SquareButton)
app.component('ApiModal', ApiModal)
app.component('Modal', Modal)
app.use(i18n)
app.use(router)
app.use(pinia)
app.use(head)
app.mount('#app')