<template>
    <div>
        <template v-for="(tag, index) in tags" :key="tag">
            <el-tag :closable="true" @close="closeTag(index)">{{ tag }}</el-tag>
            <span style="padding: 10px;"></span>
        </template>
        <el-input style="width: 90px;" v-if="show" v-model="inputValue" @keyup.enter="handleInputConfirm"
            @blur="handleInputConfirm" size="small">
        </el-input>
        <el-button size="small" v-else @click="showInput">新建标签 +</el-button>    
    </div>

    <br/>

    <div>
        <el-check-tag :checked="true">足球</el-check-tag>
        <el-check-tag :checked="false">篮球</el-check-tag>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tags: ["男装", "女装", "帽子", "鞋子"], // 默认展示的标签
            show: false,
            inputValue: ""
        }
    },
    methods: {
        // 删除某个标签的方法，将其从数据源的数组中移除
        closeTag(index) {
            this.tags.splice(index, 1);
        },
        // 显示输入框，新建标签的时候需要
        showInput() {
            this.show = true;
        },
        // 确认输入，当输入框失去焦点的时候调用，向数据源中新增数据
        handleInputConfirm() {
            let inpuValue = this.inputValue;
            if (inpuValue) {
                this.tags.push(inpuValue);
            }
            this.show = false;
            this.inputValue = "";
        }
    }
}
</script>