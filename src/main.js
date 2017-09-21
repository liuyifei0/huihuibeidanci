// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

require('!style-loader!css-loader!less-loader!./assets/css/main.less')

import index from './page/index.vue'
import Creat from './page/Creat.vue'
import ceshi from './page/ceshi.vue'



const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
	        {path:'/',component:index},
	        {path:'/creat',component:Creat},
	        {path:'/ceshi',component:ceshi}
	]
})


Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  router,
  template:`
  	<div>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
		
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
  `
}).$mount("#app")
