<template>
  <div id="index">
  	<div @click="gocreat">my is index</div>
    
  </div>
</template>

<script>
	export default {
		name:'index',
		methods:{
			gocreat:function(){
				this.$router.push({path:'/creat'})
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../assets/css/main.less';
#index{
	width: 100%;
	height: 2000px;
	background-color: @green;
}
</style>
