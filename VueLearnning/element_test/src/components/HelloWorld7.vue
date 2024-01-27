<template>
    <div>
        <el-select :multiple="true" :clearable="true" v-model="value">
            <el-option v-for="item in options" :value="item.value" :label="item.label" :key="item.value"></el-option>
        </el-select>
    </div>
    <br />
    <div>
        <el-select :multiple="true" :clearable="true" v-model="value">
            <el-option-group v-for="group in options2" :key="group.label" :label="group.label">
                <el-option v-for="item in group.options" :value="item.value" :label="item.label"
                    :key="item.value"></el-option>
            </el-option-group>
        </el-select>
    </div>
    <br />
    <div>
        <el-cascader v-model="value" :options="datas" :props="{ expandTrigger: 'hover' }"></el-cascader>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: [],
            options: [
                {
                    value: "选项1",
                    label: "足球",
                },
                {
                    value: "选项2",
                    label: "篮球",
                    disable: true,
                },
                {
                    value: "选项3",
                    label: "排球",
                },
                {
                    value: "选项4",
                    label: "乒乓球",
                },
                {
                    value: "选项5",
                    label: "水球",
                }
            ],
            options2: [
                {
                    label: "球类",
                    options: [
                        {
                            value: "选项1",
                            label: "足球",
                        },
                        {
                            value: "选项2",
                            label: "篮球",
                            disable: true,
                        },
                        {
                            value: "选项3",
                            label: "排球",
                        },
                        {
                            value: "选项4",
                            label: "乒乓球",
                        },
                        {
                            value: "选项5",
                            label: "水球",
                        }
                    ]
                },
                {
                    label: "休闲",
                    options: [
                        {
                            value: "选项6",
                            label: "散步",
                        },
                        {
                            value: "选项7",
                            label: "游泳",
                        },
                        {
                            value: "选项8",
                            label: "看书",
                        }
                    ]
                }
            ],
            datas: [
                {
                    value: "父1",
                    label: "运动",
                    children: [
                        {
                            value: "子1",
                            label: "足球",
                        },
                        {
                            value: "子2",
                            label: "篮球",
                        },
                    ],
                },
                {
                    value: "父2",
                    label: "休闲",
                    children: [
                        {
                            value: "子1",
                            label: "游戏",
                        },
                        {
                            value: "子2",
                            label: "魔方",
                        },
                    ],
                },
            ]
        }
    }
}
</script>