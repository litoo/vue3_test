import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import './assets/css/global.css'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App).use(router)
app.use(ElementPlus)
app.mount('#app')
