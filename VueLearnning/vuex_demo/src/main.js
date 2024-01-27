import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

const app = createApp(App)

const store = createStore({
    // 定义要共享的状态数据
    state() {
        return {
            count: 0
        }
    },
    // 定义修改状态的方法
    mutations: {
        increment(state) {
            state.count++;
        },
        increment2(state, n) {
            state.count += n;
        }
    },
    getters: {
        countText(state) {
            return state.count + "次";
        },
        countText2(state) {
            return (s) => {
                return state.count + s;
            }
        }
    }
})

app.use(store)
app.mount('#app')
