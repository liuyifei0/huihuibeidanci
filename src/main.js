// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/index'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

require('!style-loader!css-loader!less-loader!./assets/css/main.less')

import index from './page/index.vue'
import Creat from './page/Creat.vue'




const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
	        {path:'/',component:index},
	        {path:'/index',component:index},
	        {path:'/creat',component:Creat},
	        {path:'*',component:index},
	]
})


Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  router,
  store,
  template:`
  	<div>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
  `,
  beforeCreate:function(){
	  //和服务器中断连接 跳转
	  if(this.$store.state.serverIP == 0 ){
		  router.push({path:'/error'})
	  }
	  //判断是否为注册用户
	  if(this.$store.state.newbi == 1){
		  router.push({path:'/index'})
	  }else{
		  router.push({path:'/creat'})
	  }
  }
}).$mount("#app")



























