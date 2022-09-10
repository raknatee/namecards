import { createApp } from 'vue'
import './assets/scss/global.scss'
import './assets/scss/card.scss'
import App from './App.vue'

const app = createApp(App)

import router from "./router/index"
app.use(router)

app.mount('#app')
