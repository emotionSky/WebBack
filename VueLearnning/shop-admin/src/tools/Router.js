import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../components/home/Home.vue';
import Login from '../components/login/Login.vue';
import Store from '../tools/Storage.js';
import Order from '../components/order/Order.vue';
import Goods from '../components/goods/Goods.vue';
import AddGoods from '../components/goods/AddGoods.vue';
import GoodsCategory from '../components/goods/GoodsCategory.vue';
import ManagerList from '../components/manager/ManagerList.vue';
import ManagerOrder from '../components/manager/ManagerOrder.vue';
import ManagerReqList from '../components/manager/ManagerReqList.vue';
import DataCom from '../components/financial/DataCom.vue';
import TradeInfo from '../components/financial/TradeInfo.vue';
import TradeList from '../components/financial/TradeList.vue';

// 创建路由实例
const Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/login',
            component: Login,
            name: "login",
        },
        {
            path: '/home',
            component: Home,
            name: "home",
            children: [
                {
                    path: 'order/:type', // 0是普通订单，1是秒杀订单
                    component: Order,
                    name: "Order",
                },
                {
                    path: 'goods/:type', // 0是普通订单，1是秒杀订单，2是今日推荐
                    component: Goods,
                    name: "Goods"
                },
                {
                    path: 'addGoods/:type', // 0是普通订单，1是秒杀订单，2是今日推荐
                    component: AddGoods,
                    name: "AddGoods"
                },
                {
                    path: 'category',
                    component: GoodsCategory,
                    name: 'GoodsCategory'
                },
                {
                    path: 'ownerlist',
                    component: ManagerList,
                    name: 'ManagerList'
                },
                {
                    path: 'ownerreq',
                    component: ManagerReqList,
                    name: 'ManagerReqList'
                },
                {
                    path: 'ownerorder',
                    component: ManagerOrder,
                    name: 'ManagerOrder'
                },
                {
                    path: 'data',
                    component: DataCom,
                    name: 'DataCom'
                },
                {
                    path: 'tradeinfo',
                    component: TradeInfo,
                    name: 'TradeInfo'
                },
                {
                    path: 'tradelist',
                    component: TradeList,
                    name: 'TradeList'
                }
            ],
            redirect: '/home/order/0'
        }
    ]
})

// 路由守卫，当未登录时，不允许跳转到非登录页面
Router.beforeEach((from) => {
    let isLogin = Store.getters.isLogin;
    if (isLogin || from.name == 'login') {
        return true;
    }
    else {
        return { name: 'login' };
    }
})

export default Router;