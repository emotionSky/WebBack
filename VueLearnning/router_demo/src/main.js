import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// 导入路由需要用的自定义组件
import Demo1 from './components/DemoOne.vue'
import Demo2 from './components/DemoTwo.vue'
import Demo3 from './components/DemoThree.vue'
import User from './components/UserDemo.vue'
import UserSetting from './components/UserSetting.vue'
// import CatagoryDemo from './components/CatagoryDemo.vue'
import FriendDemo from './components/FriendDemo.vue'
import FuncParams from './components/FuncParams.vue'

const app = createApp(App)

// 定义路由
const routes = [
    { path: '/demo1', component: Demo1 },
    // {
    //     path: '/demo1', component: Demo1, name: 'Demo1', beforeEach: router => {
    //         console.log(router);
    //         return false;
    //     }
    // },
    { path: '/demo2', component: Demo2 },
    // { path: '/user/:username/:id', component: User },
    // { path: '/user/info/:username', component: User },
    // { path: '/user/setting/:id', component: UserSetting },
    // { path: '/user/:username', component: User },
    // { path: '/user/:id(\\d+)', component: UserSetting },

    // { path: '/user/:username?', component: User }, // 参数被定义为可选
    // { path: '/catagory/:cat*', component: CatagoryDemo },

    {
        path: '/user/:username?',
        component: User,
        children: [
            {
                path: 'friends/:count',
                component: FriendDemo
            }
        ]
    },

    {
        path: '/home/:username/:id',
        components: {
            topBar: User,
            main: UserSetting,
        }
    },
    { path: '/d/1', redirect: '/demo1' },
    { path: '/d/2', redirect: { name: 'Demo2' } },
    {
        path: '/d', redirect: to => {
            console.log(to); // to是路由对象
            // 使用随机数来模拟登录状态
            let login = Math.random() > 0.5;
            if (login) {
                return { path: '/demo1' };
            }
            else {
                return { path: '/demo2' }
            }
        }
    },
    {
        path: '/home/:param(\\d+)',
        component: FuncParams,
        props: true,
    },
    {
        path: '/demo3',
        component: Demo3,
    }
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

router.beforeEach((to, from) => {
    console.log(to);   // 将要跳转到的路由对象
    console.log(from); // 当前将要离开的路由对象
    return true;       // true表示允许此次跳转，false表示禁止此次跳转
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
// 注册路由
app.use(router)
// 挂载应用
app.mount('#app')
