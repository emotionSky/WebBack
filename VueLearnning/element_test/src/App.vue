<template>
  <HelloWorld12></HelloWorld12>
  <hr />
  <HelloWorld11></HelloWorld11>
  <hr />
  <HelloWorld10></HelloWorld10>
  <hr />
  <HelloWorld9></HelloWorld9>
  <hr />
  <HelloWorld8></HelloWorld8>
  <hr />
  <HelloWorld7></HelloWorld7>
  <hr />
  <HelloWorld6></HelloWorld6>
  <hr />
  <HelloWorld5></HelloWorld5>
  <hr />
  <HelloWorld4></HelloWorld4>
  <hr />
  <HelloWorld3></HelloWorld3>
  <hr />
  <HelloWorld2></HelloWorld2>
  <hr />
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="学习基本的样式设计"></HelloWorld>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from './components/HelloWorld2.vue';
import HelloWorld3 from './components/HelloWorld3.vue';
import HelloWorld4 from './components/HelloWorld4.vue';
import HelloWorld5 from './components/HelloWorld5.vue';
import HelloWorld6 from './components/HelloWorld6.vue';
import HelloWorld7 from './components/HelloWorld7.vue';
import HelloWorld8 from './components/HelloWorld8.vue';
import HelloWorld9 from './components/HelloWorld9.vue';
import HelloWorld10 from './components/HelloWorld10.vue';
import HelloWorld11 from './components/HelloWorld11.vue';
import HelloWorld12 from './components/HelloWorld12.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloWorld2,
    HelloWorld3,
    HelloWorld4,
    HelloWorld5,
    HelloWorld6,
    HelloWorld7,
    HelloWorld8,
    HelloWorld9,
    HelloWorld10,
    HelloWorld11,
    HelloWorld12
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
