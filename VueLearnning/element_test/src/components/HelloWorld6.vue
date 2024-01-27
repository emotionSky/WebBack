<template>
    <div>
        <el-input v-model="value" placeholder="helloworld" :disable="false" :show-password="true" :clearable="true"
            prefix-icon="Search" type="text"></el-input>
    </div>
    <br />
    <div>
        <el-input v-model="value2" type="text">
            <template #prepend>Http://</template>
            <template #append>.com</template>
        </el-input>
    </div>
    <br />
    <div>
        <el-autocomplete v-model="value3" :fetch-suggestions="queryData" placeholder="请输入内容" @select="selected"
            :highlight-first-item="true"></el-autocomplete>
    </div>
    <br/>
    <div>
        <el-input-number :min="1" :max="10" :step="1" v-model="num"></el-input-number>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "",
            value2: "",
            value3: "",
            num: 3,
        }
    },
    methods: {
        // 定义方法，模拟获取输入框的自动提示补全数据
        queryData(queryString, callback) {
            // queryString参数为当前输入框输入的数据，调用callback回调来返回补全数据
            let array = [];
            if (queryString.length > 0) {
                // 将当前输入的内容作为自动提示的第一个选项
                array.push({ value: queryString })
            }
            // 追加一些测试数据
            array.push(...[{ value: "衣服" }, { value: "裤子" }, { value: "帽子" }, { value: "鞋子" }]);
            callback(array)
        },
        // 选中某个选项，使用alert提示
        selected(obj) {
            alert(obj.value)
        }
    }
}
</script>
