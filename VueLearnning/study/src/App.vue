<template>
	<Home></Home>
</template>

<script>
import Home from './components/AppHome.vue'

export default {
	name: 'App',
	components: {
		Home: Home
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
