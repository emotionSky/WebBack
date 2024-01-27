import { createApp } from 'vue'
import App from './App.vue'

// 引入 Element Plus 模块
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'

// 引入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
// 挂载 Element Plus 模块
app.use(ElementPlus)
// 遍历ElementPlusIconsVue中的所有组件进行注册
for (const [key, component] of Object.entries(ElementPlusIconsVue)){
    // 向应用实例中全局注册图标组件
    app.component(key, component)
}
app.mount('#app')
