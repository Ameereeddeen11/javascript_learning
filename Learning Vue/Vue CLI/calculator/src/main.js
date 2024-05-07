import { createApp } from 'vue'
import App from './App.vue'
import TheButton from '@/components/Button.vue'

createApp(App)
    .component('TheButton', TheButton)
    .mount('#app')