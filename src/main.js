import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createPinia } from 'pinia'

import router from './Routers/index.js'

createApp(App)
.use(createPinia())
.use(router).mount('#app')