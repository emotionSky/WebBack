import { createApp } from 'vue'

// 导入vue-axios模块
import VueAxios from 'vue-axios'
import axios from 'axios'

import App from './App.vue'

const app = createApp(App)
app.use(VueAxios, axios)
app.mount('#app')
