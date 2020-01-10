const state = {
  cartArry:JSON.parse(localStorage.getItem('cartArry'))||[], //存储购物车商品数组
}

// 以计算属性形式返回
const getters = {
	countSum:state=>{
		let num = 0;
		state.cartArry.forEach(item=>{
			num+=item.cartCount;
		})
		return num;
	}
}

// 异步获取值后commit mutations更改值
const actions = {
  
}

// 更改state
const mutations = {
	// 添加商品到购物车
	toCart(state,tag){
		let goods = state.cartArry.find(val=>val.title==tag.label)
		if(goods){
			// console.log(goods);
			goods.cartCount += 1;
		}else{
			state.cartArry.push({title:tag.label,cartCount:1})
		}
	},
	// 增加商品
	cartAdd(state,index){
		state.cartArry[index].cartCount++;
	},
	cartSub(state,index){
		if(state.cartArry[index].cartCount>1){
			state.cartArry[index].cartCount--;
		}else{
			if(window.confirm('是否确定要把商品移除?')){
				state.cartArry.splice(index,1);
			}
		}
	},
	// 减少商品
	// 清空购物车
	clearCart(state){
		if(window.confirm('是否确定需要清空购物车?')){
			state.cartArry=[];
		}
	}
}

export default { 
  namespaced: true, //成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名
  state,
  getters,
  actions,
  mutations
}
