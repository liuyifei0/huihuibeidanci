<template>
	<div id="btn-lg">
		<button class="text-size-md">{{ btnText }}</button>
	</div>
</template>

<script>
	export default{
		name:'btn-lg',
		props:['btnText']
	}
</script>

<style lang="less" scoped>
@import '../assets/css/variables.less';
	button{
		outline: none;
		border-style:none;
		background-color: @orange;
		color:@white;
		width: 75%;
		height: 40px;
		border-radius: 10px;
	}
</style>