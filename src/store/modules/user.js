const state = {
	token: '',
	addressArr: JSON.parse(localStorage.getItem('addressArr')) || [],
	defaultAddress: {},
	currentAddressIndex: JSON.parse(localStorage.getItem('currentAddressIndex')) || 0,
}

// 以计算属性形式返回
const getters = {

}

// 异步获取值后commit mutations更改值
const actions = {
	addNewAddress(commit, model) {
		// commit.
		localStorage.setItem('defaultAddress', JSON.stringify(state.user.defaultAddress))
	},
	// getAddressList(commit){
	// 	let tmpArr=JSON.parse(localStorage.getItem('addressArr'));
	// },
}

// 更改值
const mutations = {
	setToken(state, token) {
		state.token = token;
	},
	// setNavIndex(state,navIndex){
	// 	state.navIndex = navIndex;
	// },
	setCurrentAddressIndex(state, index) {
		state.currentAddressIndex = index;
	},
	// 添加收货地址
	addNewAddress(state,info){
		state.addressArr.push(info);
	},
	delAddress(state,index){
		state.addressArr.splice(index,1);
	}
}

export default {
	namespaced: true, //成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名
	state,
	getters,
	actions,
	mutations
}
