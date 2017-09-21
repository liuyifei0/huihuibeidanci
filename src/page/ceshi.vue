<template>
	<div id="ceshi">
  	<div @click="goindex">my is ceshi</div>
    
  </div>
</template>

<script>
	export default{
		name:'ceshi',
		methods:{
			goindex:function(){
				this.$router.push({path:'/'})
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../assets/css/main.less';
#ceshi{
	width: 100%;
	height: 2000px;
	background-color: yellow;
}
</style>
