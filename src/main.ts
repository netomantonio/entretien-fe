import { createApp } from 'vue'
import Toast, { POSITION } from 'vue-toastification'
import App from './App.vue'
// @ts-ignore
import router from './router/index.js'
// @ts-ignore
import VueTheMask from 'vue-the-mask'
// Plugins
// import { registerPlugins } from '@/plugins'

import 'animate.css'
import '@/assets/css/tailwind.css'
import '@/assets/css/fonts.css'
import 'vue-toastification/dist/index.css'




const app = createApp(App)
app.use(router)
app.use(Toast, { position: POSITION.BOTTOM_RIGHT })
app.use(VueTheMask)
app.mount('#app')
