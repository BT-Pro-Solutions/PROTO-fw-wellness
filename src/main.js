import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerIcons } from './icons/register'
import './styles/variables.css'
import './styles/base.css'
import './styles/components.css'
import './styles/landing.css'

registerIcons()

createApp(App).use(router).mount('#app')
