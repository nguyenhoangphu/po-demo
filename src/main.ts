import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [name, comp] of Object.entries(ElementPlusIconsVue)) {
    app.component(name, comp)
}
app.use(ElementPlus).use(store).use(router).mount('#app')
