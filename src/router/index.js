import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // component: Home,
		redirect:'/user-login', //重定向:当地址为空重定向到login
		// redirect:'/location-list', //重定向:当地址为空重定向到login
		// redirect:'/addNew-address', //重定向:当地址为空重定向到login
		meta: {title: 'home'}
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue'),
		meta: {title: '更多'}
  },
	{
	  path: '/user-login',
	  name: 'user-login',
	  // route level code-splitting
	  // this generates a separate chunk (about.[hash].js) for this route
	  // which is lazy-loaded when the route is visited.
		// redirect:'/login',
	  component: () => import('../views/Login.vue'),
		meta: {title: '登录'}
	},
	{
	  path: '/user-register',
	  name: 'user-register',
	  // route level code-splitting
	  // this generates a separate chunk (about.[hash].js) for this route
	  // which is lazy-loaded when the route is visited.
	  component: () => import('../views/Register.vue'),
		meta: {title: '注册'}
	},
	{
	  path: '/location-list',
	  name: 'location-list',
	  // route level code-splitting
	  // this generates a separate chunk (about.[hash].js) for this route
	  // which is lazy-loaded when the route is visited.
	  component: () => import('../views/LocationList.vue'),
		meta: {title: '我的收货地址'}
	},
	{
	  path: '/addNew-address',
	  name: 'addNew-address',
	  // route level code-splitting
	  // this generates a separate chunk (about.[hash].js) for this route
	  // which is lazy-loaded when the route is visited.
	  component: () => import('../views/NewAddress.vue'),
		meta: {title: '添加新地址'}
	},
	{
	  path: '/main',
	  name: 'main',
	  // route level code-splitting
	  // this generates a separate chunk (about.[hash].js) for this route
	  // which is lazy-loaded when the route is visited.
		redirect:'/main/index',
	  component: () => import('../views/Main.vue'),
		// meta: {title: ''},
		children:[
			{
			  path: 'index',
			  name: 'index',
				component: () => import('../views/Index.vue'),
				meta: {title: '首页'}
			},
			{
			  path: 'list',
			  name: 'list',
				component: () => import('../views/List.vue'),
				meta: {title: '分类'}
			},
			{
			  path: 'cart',
			  name: 'cart',
				component: () => import('../views/Cart.vue'),
				meta: {
					title: '购物车',
					requireAuth:true,//当有这个字段时,我们认为他这个路由是需要登录权限的
				}
			},
			{
			  path: 'search',
			  name: 'search',
				component: () => import('../views/Search.vue'),
				meta: {title: '搜索'}
			},
			{
			  path: 'mine',
			  name: 'mine',
				component: () => import('../views/Mine.vue'),
				meta: {
					title: '我的',
					requireAuth:true,//当有这个字段时,我们认为他这个路由是需要登录权限的
				},
				
			},
		]
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
