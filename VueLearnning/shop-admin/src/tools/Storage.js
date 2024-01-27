/*
 * 实现全局状态配置，目前简单认为用户名密码存在则是已经登录了，
 * 实际情况下，应该需要向后台请求，拿到token，然后才能认为登录。
 */
import { createStore } from 'vuex'

const Store = createStore({
    state() {
        // 全局存储用户名和密码
        return {
            userName: "",
            userPassword: "",
        }
    },
    getters: {
        // 进行是否登录的判断
        isLogin: (state) => {
            return state.userName.length > 0 && state.userPassword.length > 0;
        }
    },
    mutations: {
        // 清除缓存的用户信息，登出使用
        clearUserInfo(state) {
            state.userName = "";
            state.userPassword = "";
        },
        // 注册用户信息，登录时使用
        registUserInfo(state, { name, password }) {
            state.userName = name;
            state.userPassword = password;
        }
    }
})

export default Store;