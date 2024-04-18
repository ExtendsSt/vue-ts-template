import { createApp } from 'vue'
import App from './App.vue'
import { installAll } from '~/modules'

import '@unocss/reset/tailwind.css'
import '~/assets/styles/main.css'

const app = createApp(App)
// 挂载所有模块
installAll(app)
app.mount('#app')
