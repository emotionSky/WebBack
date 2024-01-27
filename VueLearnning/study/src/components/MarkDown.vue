<template>
    <p v-html="content"></p>
</template>

<script>
import { marked } from 'marked';
export default {
    // 提供外部属性来设置内容
    props: ["content"],
    computed: {
        data() {
            // 计算属性，将外部设置的文章Markdown内容转换成HTML
            return marked(this.content);
        }
    }
}
</script>