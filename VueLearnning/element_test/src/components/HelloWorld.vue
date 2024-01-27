<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-empty description="空空如也~~~"></el-empty>
    <div>
      <el-button>默认按钮</el-button>
      <el-button size="large">大型按钮</el-button>
      <el-button size="small">小型按钮</el-button>
    </div>
    <br>
    <div>
      <el-button type="primary">常规按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>
    <br>
    <div>
      <el-button type="primary" :plain="true">描边</el-button>
      <el-button type="primary" :round="true">圆角</el-button>
      <el-button type="primary" :circle="true">圆形</el-button>
      <el-button type="primary" :disable="true">禁用</el-button>
      <el-button type="primary" :loading="true">加载</el-button>
    </div>
    <br>
    <div>
      <el-button type="primary" icon="Share"></el-button>
      <el-button type="primary" icon="Delete"></el-button>
      <el-button type="primary" icon="Search">图标在前</el-button>
      <el-button type="primary">图标在后<el-icon class="el-icon--right"><Upload/></el-icon></el-button>
    </div>
    <br>
    <div>
      <el-tag>普通标签</el-tag>
      <el-tag :hit="true">描边标签</el-tag>
      <el-tag color="purple">紫色背景标签</el-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
