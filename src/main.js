import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/all.scss'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'
import { createPinia } from 'pinia'

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app');
