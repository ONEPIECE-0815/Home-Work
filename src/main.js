import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'amfe-flexible'

import setaxios from './request/setaxios'
setaxios()

// import AMap from 'vue-amap';
// Vue.use(AMap)
// AMap.initAMapApiLoader({
//   key: 'd0f2a5e3450833930987f7c3274863f0',
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView',
//     'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor',
//     'AMap.CircleEditor', 'AMap.Geolocation']
// });

Vue.config.productionTip = false

Vue.prototype.$http = axios

router.beforeEach((to, from, next) => {
	//无论是刷新还是跳转路由,第一个进入的就是这个路由前置钩子
    /* 路由发生变化修改页面title */
		store.commit('user/setToken',localStorage.getItem('token'));
		
    if (to.meta.title) {
      document.title = to.meta.title;
    }
		if(to.meta.requireAuth){
			// console.log(store.state.user.token);
			if(store.state.user.token){
				next();
			}else{
				router.push({
					path:'/user-login',
					query:{redirect:to.fullPath}
				})
				// next({
				// 	path:'/user-login',
				// 	query:{redirect:to.fullPath}
				// })
			}
		}else{
			next();
		}
    // next();
  }),

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

