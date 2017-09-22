<template>
	<div id="creat">
		<header-lg bigTitle="CET-4" noteTitle="四级单词复用管理"></header-lg>
		<div class="text-text padding-md">
			<p class="text-size-lg">Hi,</p>
			<p class="text-indent">亲爱的你，距离大学英语四级（COLLEGE ENGLISH TEST 4/6）还有 356 天，根据考试大纲要求，你需要记忆 3441 个单词和 360 个短语。你每天需要记忆 12 个单词。让我帮你规划的记忆管理。</p>
			<p class="text-indent">当然你不会感觉到枯燥，养成式记忆办法，规划了单词的遗忘曲线，同时，你可以邀请更多的小伙伴一起参与，或加入更多社区。有趣的单词接龙，俚语猜猜看，作文漂流瓶，更多的活动游戏美哒哒的学英语吧。</p>
			<p>&nbsp;</p>
			<p class="text-align-right">
				会会
			</p>
		</div>
		<btn-lg btnText="创建计划" class="btn"></btn-lg>
	</div>
</template>

<script>
	import headerLg from '../components/header-lg.vue'
	import btnLg    from '../components/btn-lg.vue'
	export default {
		name: 'creat',
		components: {
			headerLg,
			btnLg
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/main.less';
	#creat {}
	
	.text-text {
		font-size: 110%;
	}
	p{
		margin-bottom: 10px;
	}
	.btn{
		position: fixed;
		width: 75%;
		left:20%;
		bottom:20px
	}
</style>