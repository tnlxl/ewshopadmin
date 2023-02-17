import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './style/tailwind.css'

import router from "./router";
//1.导入 pinia
import {createPinia} from "pinia";
//2，创建 pinia 实例
const pinia = createPinia()



const app = createApp(App)
//创建并挂载路由实例
app.use(router)
//3.
app.use(pinia)
    app.mount('#app')
