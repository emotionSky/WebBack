<template>
    <div>
        <el-image style="width: 500px;" src="http://huishao.cc/img/head-img.png"></el-image>

        <br/>

        <!-- 使用placeholder插槽来设置加载中的占位内容 -->
        <!-- 使用error插槽来设置加载失败的占位内容 -->
        <el-image style="width: 500px;" src="http://huishao.cc/img/head-img.png">
            <template #placeholder>
                <h1>加载中...</h1>
            </template>
            <template #error>
                <h1>加载失败</h1>
            </template>
        </el-image>

        <br/>

        <!-- 使用文本类型的头像 -->
        <el-avatar style="margin: 20px;">用户</el-avatar>
        <!-- 使用图标类型的头像 -->
        <el-avatar style="margin: 20px;"><el-icon><User/></el-icon></el-avatar>
        <!-- 使用图片类型的头像 -->
        <el-avatar style="margin: 20px;" :size="100" src="http://huishao.cc/img/avatar.jpg"></el-avatar>
        <el-avatar style="margin: 20px;" src="http://huishao.cc/img/avatar.jpg"></el-avatar>
        <el-avatar style="margin: 20px;" shape="square" src="http://huishao.cc/img/avatar.jpg"></el-avatar>
    </div>
</template>