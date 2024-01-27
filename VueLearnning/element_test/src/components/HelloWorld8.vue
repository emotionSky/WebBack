<template>
    <div>
        <el-switch v-model="switch1" active-text="会员" inactive-text="非会员" active-color="#00FF00"
            inactive-color="#FF0000"></el-switch>
    </div>
    <br />
    <div>
        <el-switch v-model="switch2" active-text="加载中" :loading="true"></el-switch>
    </div>
    <br />
    <div>
        <el-switch v-model="switch3" inactive-text="禁用" :disable="true"></el-switch>
    </div>
    <br />
    <div>
        <el-slider v-model="sliderValue1"></el-slider>
        <el-slider v-model="sliderValue2" :format-tooltip="format"></el-slider>
        <el-slider v-model="sliderValue3" :format-tooltip="format" :step="10" :show-stops="true"></el-slider>
        <el-slider v-model="sliderValue4" :format-tooltip="format" :show-input="true"></el-slider>
    </div>
    <br />
    <div>
        <el-slider v-model="sliderValue5" :marks="marks"></el-slider>
    </div>
    <br />
</template>

<script>
export default {
    data() {
        return {
            switch1: false,
            switch2: true,
            switch3: false,
            sliderValue1: 0,
            sliderValue2: 0,
            sliderValue3: 0,
            sliderValue4: 0,
            sliderValue5: 0,
            marks: {
                0: "起点",
                50: "半程啦！",
                90: {
                    style: {
                        color: "#ff0000",
                    },
                    label: "就到终点啦",
                }
            }
        }
    },
    methods: {
        format(value) {
            return value + '%';
        }
    }
}
</script>