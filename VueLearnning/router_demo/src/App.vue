<template>
	<h1>HelloWorld</h1>
	<p>
		<!-- router-link是路由跳转组件，用to来指定要跳转的路由 -->
		<router-link to="/demo1">页面1</router-link>
		<br />
		<router-link to="/demo2">页面2</router-link>
		<br />
		<router-link to="/demo3">页面3</router-link>

		<!-- <br />
		<router-link to="/user/emotionsky/1212">emotionsky</router-link>
		<br />
		<router-link to="/user/dreamsky/2323">dreamsky</router-link> -->

		<!-- <br />
		<router-link to="/user/emotionsky">emotionsky用户</router-link>
		<router-link to="/user/1212">emotionsky账号</router-link>
		<br />
		<router-link to="/user/dreamsky">dreamsky用户</router-link>
		<router-link to="/user/2323">dreamsky账号</router-link> -->

		<!-- <br/>
		<router-link to="/catagory/catssd">分类测试</router-link> -->

		<!-- <br/>
		<router-link to="/user/dreamsky/friends/123">好友测试</router-link> -->
	</p>
	<p>
		<el-button type="primary" @click="toUser">用户中心</el-button>
	</p>
	<p>
		<el-button type="primary" @click="testParam">测试路由传参</el-button>
	</p>
	<!-- router-view是路由的页面出口，路由匹配到的组件会渲染在此 -->
	<router-view></router-view>

	<el-container>
		<el-header height="80px">
			<router-view name="topBar"></router-view>
		</el-header>
		<el-main>
			<router-view name="main"></router-view>
		</el-main>
	</el-container>
</template>

<script>

export default {
	name: 'App',
	components: {
	},
	methods: {
		toUser() {
			this.$router.push({
				path: "/user/dreamsky"
			})
		},
		testParam() {
			this.$router.push({
				path: "/home/57892"
			})
		}
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
