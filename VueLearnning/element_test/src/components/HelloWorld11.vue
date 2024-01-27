<template>
    <div class="hello11">
        <el-table :data="tableData">
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="age" label="年龄"></el-table-column>
            <el-table-column prop="subject" label="科目"></el-table-column>
        </el-table>
    </div>
    <br />
    <div class="hello11">
        <el-menu mode="horizontal">
            <el-menu-item index="1">首页</el-menu-item>
            <el-sub-menu index="2">
                <template #title>广场</template>
                <el-menu-item index="2-1">音乐</el-menu-item>
                <el-menu-item index="2-2">视频</el-menu-item>
                <el-menu-item index="2-3">游戏</el-menu-item>
                <el-sub-menu index="2-4">
                    <template #title>体育</template>
                    <el-menu-item index="2-4-1">篮球</el-menu-item>
                    <el-menu-item index="2-4-2">足球</el-menu-item>
                    <el-menu-item index="2-4-3">排球</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="3" :disable="true">个人中心</el-menu-item>
            <el-menu-item index="4">设置</el-menu-item>
        </el-menu>
    </div>
    <br />
    <div class="hello11">
        <el-tabs type="border-card">
            <el-tab-pane label="页面1" name="1">页面1</el-tab-pane>
            <el-tab-pane label="页面2" name="2">页面2</el-tab-pane>
            <el-tab-pane label="页面3" name="3">页面3</el-tab-pane>
            <el-tab-pane label="页面4" name="4">页面4</el-tab-pane>
        </el-tabs>
    </div>
    <br />
    <div class="hello11">
        <div style="margin: 300px;">
            <el-button @click="drawer = true" type="primary">
                点我打开抽屉
            </el-button>
        </div>
        <el-drawer title="抽屉面板的主题" v-model="drawer" direction="ltr">抽屉面板的内容</el-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    name: "小王",
                    age: 29,
                    subject: "Java",
                },
                {
                    name: "小李",
                    age: 30,
                    subject: "C++",
                },
                {
                    name: "小张",
                    age: 28,
                    subject: "JavaScript",
                }
            ],
            drawer: false
        }
    }
}
</script>

<style>
.hello11 {
    margin-top: 40px;
    width: 80%;
    text-align: center;
    display: inline-block;
}
</style>