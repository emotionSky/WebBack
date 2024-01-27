<template>
    <h1>示例页面1</h1>
</template>

<script>
export default {
    beforeRouteEnter(to, from) {
        console.log(to, from, "前置守卫");
        return true;
    },
    beforeRouteUpdate(to, from) {
        console.log(to, from, "路由参数有更新时的守卫");
    },
    beforeRouteLeave(to, from) {
        console.log(to, from, "离开页面");
    }
}
</script>