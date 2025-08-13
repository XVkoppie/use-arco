import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Icons from './components/icons'
import pinia from '@/stores/index'

import './assets/main.css'
import '@/styles/main.less'
import dirctive from '@/dirctive'
const app = createApp(App)

app.use(Icons)

app.use(pinia)
app.use(router)
app.use(dirctive)
app.mount('#app')
