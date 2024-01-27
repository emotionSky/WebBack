<template>
	<!-- <h1>计数器1: {{ count }}</h1>
	<button @click="increment">增加</button> -->

	<!-- <h1>计数器1: {{ this.$store.state.count }}</h1> -->
	<!-- <h1>计数器1: {{ count }}</h1> -->
	<!-- <h1>计数器1: {{ this.$store.getters.countText }}</h1> -->
	<h1>计数器1: {{ this.$store.getters.countText2("次") }}</h1>
	<!-- <button @click="increment">增加</button> -->
	<button @click="increment2(2)">增加</button>
</template>

<script>
// import { mapState } from 'vuex'
export default {
	// data() {
	// 	return {
	// 		count: 0
	// 	}
	// },
	methods: {
		// increment(){
		// 	this.count++;
		// },
		increment() {
			this.$store.commit('increment')
		},
		increment2(n){
			this.$store.commit('increment2', n)
		}
	},
	// computed:mapState(['count'])
}
</script>