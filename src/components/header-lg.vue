<template>
	<div id="header-lg">
		<h3>{{ bigTitle }}</h3>
		<h4>{{ noteTitle }}</h4>
	</div>
</template>

<script>
	export default{
		name:'header-lg',
		props:[
			'bigTitle',
			'noteTitle'
		]
	}
	
</script>

<style scoped lang="less">
	@import '../assets/css/variables.less';
	#header-lg{
		width: 100%;
		height: 110px;
		box-shadow: #ddd 0 3px;
		background:linear-gradient(270deg,@green 0%,@turquoise 100%);
		color: @white;
		padding:40px 0 0 20px;
	}
	h3{
		font-size: 300%;
	}
	h4{
		font-size: 120%;
		position: relative;
		margin-top: -10px;
	}
</style>