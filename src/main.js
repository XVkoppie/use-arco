import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Icons from './components/icons'
import './assets/main.css'

const app = createApp(App)

app.use(Icons)

app.use(createPinia())
app.use(router)
app.mount('#app')
