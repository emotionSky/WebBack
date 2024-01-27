<template>
    <h1>页面3</h1>
    <el-button type="primary" @click="click">跳转到页面4</el-button>
</template>

<script>
import Demo4 from './DemoFour.vue'
export default {
    created() {
        console.log(this);
        this.$router.addRoute({
            path: '/demo4',
            component: Demo4,
        })
    },
    methods: {
        click() {
            this.$router.push("/demo4");
        }
    }
}
</script>