<template>
    <el-container id="container">
        <el-header style="width: 100%; height: 120px;">
            <Header :items="navItems" v-on:selected="changeSelected"></Header>
        </el-header>
        <el-main>
            <Body :items="bodyItems" :topic="navItems[currentTopicIndex].title"></Body>
        </el-main>
        <el-footer>
            <div id="footer">{{ desc }}</div>
        </el-footer>
    </el-container>
</template>

<script>
import Header from './AppHeader.vue';
import Body from './AppBody.vue';
import FM from '../tools/FileManager.js';

export default {
    components: {
        Header: Header,
        Body: Body,
    },
    // mounted() {
    //     FM.getPostContent('HTML专题', '文本标签').then((res) => {
    //         console.log(res);
    //     })
    // },
    data() {
        return {
            // navItems: [
            //     {
            //         index: 0,
            //         title: "HTML专题",
            //     },
            //     {
            //         index: 1,
            //         title: "CSS专题",
            //     }
            // ],
            // bodyItems: [
            //     {
            //         index: 0,
            //         title: "HTML简介",
            //     },
            //     {
            //         index: 1,
            //         title: "HTML编辑器",
            //     }
            // ],

            // 获取所有专题，返回的数据模型包括下表和专题名称
            navItems: FM.getAllTopic().map((item, ind) => {
                return {
                    index: ind,
                    title: item,
                }
            }),
            desc: "这里就是简单的给一个描述！",
            currentTopicIndex: 0
        }
    },
    methods: {
        // 切换专题时调用
        changeSelected(index) {
            this.currentTopicIndex = Number(index);
        }
    },
    computed: {
        // 通过计算属性来获取当前专题下所有的文章列表
        bodyItems() {
            return FM.getPosts(this.currentTopicIndex).map((item, ind) => {
                return {
                    index: String(ind),
                    title: item
                }
            })
        }
    }
}
</script>

<style scoped>
#container {
    margin-left: 150px;
    margin-right: 150px;
    margin-top: 30px;
    height: 800px;
}

#footer {
    text-align: center;
    background-color: bisque;
    height: 40px;
    line-height: 40px;
    color: #717171;
}
</style>