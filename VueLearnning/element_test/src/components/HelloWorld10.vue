<template>
    <div class="hello10">
        <el-alert title="成功提示的文案" type="success"></el-alert>
        <br />
        <el-alert title="消息提示的文案" type="info"></el-alert>
        <br />
        <el-alert title="警告提示的文案" type="warning"></el-alert>
        <br />
        <el-alert title="错误提示的文案" type="error"></el-alert>
    </div>
    <br />
    <br />
    <br />
    <div>
        <el-button @click="popTip">弹出消息提示</el-button>
    </div>
    <br />
    <div>
        <el-button @click="popAlert">弹出提示框</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            temp: ""
        }
    },
    methods: {
        popTip() {
            this.$message({
                message: "提示内容",
                type: "warning",
            });
        },
        popAlert() {
            this.$msgbox({
                title: "提示",
                message: "详细的提示内容",
                type: "warning",
                showCancelButton: true,
                showConfirmButton: true,
            })
        }
    }
}
</script>

<style>
.hello10 {
    margin-top: 30px;
    text-align: center;
    display: inline-block;
    width: 50%;
}
</style>