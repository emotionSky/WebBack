<template>
	<HelloWorld></HelloWorld>
	<HelloWorld2></HelloWorld2>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from './components/HelloWorld2.vue';

export default {
	name: 'App',
	components: {
    HelloWorld,
    HelloWorld2
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
