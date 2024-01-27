import { createApp } from 'vue'
import Router from './tools/Router.js'
import Store from './tools/Storage.js'
import App from './App.vue'
import ElementPlus from 'element-plus'                         // 引入Element Plus模块
import 'element-plus/dist/index.css'                           // 引入CSS样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 引入图标

const app = createApp(App)

// 遍历ElementPlusIconsVue中的所有组件进行祖册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    // 向应用实例中全局注册图标组件
    app.component(key, component)
}
app.use(ElementPlus)

app.use(Router)
app.use(Store)
app.mount('#app')
