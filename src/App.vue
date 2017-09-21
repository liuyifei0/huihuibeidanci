<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 class="text-green">hello feifei</h1>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style lang="less">
	@import './assets/css/main.less';
	.text-green{
		color: @gray-lighter;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
