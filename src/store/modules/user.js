const state = {
  token:'',
	addressArr:JSON.parse(localStorage.getItem('addressArr'))||[],
}

// 以计算属性形式返回
const getters = {

}

// 异步获取值后commit mutations更改值
const actions = {
  
}

// 更改值
const mutations = {
  setToken(state,token){
		state.token = token;
	},
	setNavIndex(state,navIndex){
		state.navIndex = navIndex;
	},
	// 添加收货地址
	
}

export default { 
  namespaced: true, //成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名
  state,
  getters,
  actions,
  mutations
}
