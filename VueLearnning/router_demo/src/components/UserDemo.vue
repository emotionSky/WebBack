<template>
    <!-- 在组件内部使用 $route 属性获取全局的路由对象 -->
    <!-- <h1>姓名: {{ $route.params.username }}</h1>
    <h2>id: {{ $route.params.id }}</h2> -->

    <h1>用户中心</h1>
    <h2>姓名: {{ $route.params.username }}</h2>
    <router-view></router-view>
</template>

<script>
export default {    
    // mounted(){
    //     alert(`组件加载，请求数据。路由参数为name:${this.$route.params.username} id:${this.$route.params.id}`)
    // }

    // beforeRouteUpdate(to, from) {
    //     console.log(to, from)
    //     alert(`组件加载，请求数据。路由参数为name:${this.$route.params.username} id:${this.$route.params.id}`)
    // }
}
</script>