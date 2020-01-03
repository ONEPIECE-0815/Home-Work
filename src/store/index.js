import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import cart from './modules/cart'

Vue.use(Vuex)

//严格模式:只能通过mutations更改state的值
const debug = process.env.NODE_ENV !== 'production'

let store = new Vuex.Store({
  //注册模块
	modules: {
		user,
		cart
	},
	strict: debug,//定义严格模式
})

// 每次调用mutations的时候,都会先经过这个方法
store.subscribe((mutations,state)=>{
	localStorage.setItem('cartArry',JSON.stringify(state.cart.cartArry))
	localStorage.setItem('addressArr',JSON.stringify(state.user.addressArr))
})

export default store
