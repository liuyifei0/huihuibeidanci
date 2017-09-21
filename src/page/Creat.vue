<template>
  <div id="creat">
  	<div @click="goindex">my is creat</div>
    <input type="button" @click="goceshi" value="goceshi" />
  </div>
</template>

<script>
	export default {
		name:'creat',
		methods:{
			goindex:function(){
				this.$router.push({path:'/'})
			},
			goceshi:function(){
				this.$router.push({path:'/ceshi'})
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../assets/css/main.less';
#creat{
	width: 100%;
	height: 2000px;
	background-color: @orange;
}
</style>
