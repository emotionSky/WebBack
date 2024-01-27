<template>
    <div>
        <el-radio v-model="radio" label="0">男</el-radio>
        <el-radio v-model="radio" label="1">女</el-radio>
    </div>
    <br />
    <div>
        <el-radio-group v-model="radio2">
            <el-radio label="1">选项1</el-radio>
            <el-radio label="2">选项2</el-radio>
            <el-radio label="3">选项3</el-radio>
            <el-radio label="4">选项4</el-radio>
        </el-radio-group>
    </div>
    <br />
    <div>
        <el-radio-group v-model="city">
            <el-radio-button label="1">北京</el-radio-button>
            <el-radio-button label="2">上海</el-radio-button>
            <el-radio-button label="3">广州</el-radio-button>
            <el-radio-button label="4">深圳</el-radio-button>
        </el-radio-group>
    </div>
    <br />
    <div>
        <el-checkbox label="1" v-model="checkbox">A</el-checkbox>
        <el-checkbox label="2" v-model="checkbox">B</el-checkbox>
        <el-checkbox label="3" v-model="checkbox">C</el-checkbox>
        <el-checkbox label="4" v-model="checkbox">D</el-checkbox>
    </div>
    <br />
    <div>
        <el-checkbox-group v-model="checkbox2" :min="1" :max="3">
            <el-checkbox label="1" v-model="checkbox">A</el-checkbox>
            <el-checkbox label="2" v-model="checkbox">B</el-checkbox>
            <el-checkbox label="3" v-model="checkbox">C</el-checkbox>
            <el-checkbox label="4" v-model="checkbox">D</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
export default {
    name: "HelloWorld5",
    data() {
        return {
            radio: "0",
            radio2: "1",
            city: "1",
            checkbox: [],
            checkbox2: ["1"],
        }
    }
}
</script>