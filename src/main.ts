import './assets/main.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const vfm = createVfm()

app.use(createPinia())
app.use(vfm)
app.use(router)
app.use(VueQueryPlugin)

app.mount('#app')
