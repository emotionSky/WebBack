<template>
    <el-container class="container">
        <el-header>
            <el-input placeholder="请输入" class="input" v-model="city">
                <template #prepend>城市名: </template>
            </el-input>
        </el-header>
        <el-main class="main">
            <div class="today">
                今天:
                <span>{{ this.todayData.weather ?? this.plc }} {{ this.todayData.temperature ?? this.plc }}</span>
                <span style="margin-left: 20px;">{{ this.todayData.direct ?? this.plc }}</span>
                <span style="margin-left: 100px;">{{ this.todayData.date }}</span>
            </div>
            <div class="real">
                <span class="temp">{{ this.realtime.temperature ?? this.plc }}</span>
                <span class="realInfo">{{ this.realtime.info ?? this.plc }}</span>
                <span class="realInfo" style="margin-left: 20px;">{{ this.realtime.direct ?? this.plc }}</span>
                <span class="realInfo" style="margin-left: 20px;">{{ this.realtime.power ?? this.plc }}</span>
            </div>
            <div class="real">
                <span class="realInfo">空气质量: {{ this.realtime.aqi ?? this.plc }}</span>
                <span class="realInfo" style="margin-left: 20px;">湿度: {{ this.realtime.humidity ?? this.plc }}</span>
            </div>
            <div class="future">
                <div class="header">
                    5日天气预报
                </div>
                <el-table :data="futureData" style="margin-top: 30px;">
                    <el-table-column prop="date" label="日期"></el-table-column>
                    <el-table-column prop="temperature" label="温度"></el-table-column>
                    <el-table-column prop="weather" label="天气"></el-table-column>
                    <el-table-column prop="direct" label="风向"></el-table-column>
                </el-table>
            </div>
        </el-main>
    </el-container>
</template>

<style>
.container {
    background: linear-gradient(rgb(13, 104, 188), rgb(54, 31, 195));
}

.input {
    width: 300px;
    margin-top: 20px;
}

.today {
    font-size: 20px;
    color: white;
}

.temp {
    font-size: 79px;
    color: white;
}

.realInfo {
    color: white;
}

.future {
    margin-top: 40px;
}

.header {
    color: white;
    font-size: 27px;
}
</style>

<script>
export default {
    data() {
        return {
            city: "北京",
            weatherData: {},
            todayData: {},
            plc: "暂无数据",
            realtime: {},
            futureData: []
        }
    },
    mounted() {
        // 组件挂载时，进行默认数据的初始化
        this.axios.defaults.baseURL = 'myApi';
        this.requestData();
    },
    watch: {
        // 当输入的城市变化之后，调用接口进行数据请求
        city() {
            if (this.city) {
                this.requestData();
            }
        }
    },
    methods: {
        requestData() {
            let city = encodeURI(this.city);
            let api = `/simpleWeather/query?city=${city}&key=595c9df01c73d4e721dc8bee0e86c705`;
            this.axios.get(api).then((response) => {
                this.weatherData = response.data;
                this.todayData = this.weatherData.result.future[0];
                this.realtime = this.weatherData.result.realtime;
                this.futureData = this.weatherData.result.future;
                console.log(response.data)
            })
        }
    }
}
</script>