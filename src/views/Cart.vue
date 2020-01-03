<template>
	<section class="cart-page">
		<div class="goods" v-for="(item,index) in cartArr" :key="index">
<!-- 		<div class="goods" v-for="(item,index) in cartArr" :key="index"> -->
			<h3>{{item.title}}</h3>
			<div class="goods-right">
				<i class="cubeic-remove" @click="subCart(index)"></i>
				<span>{{item.cartCount}}</span>
				<i class="cubeic-add" @click="addCart(index)"></i>
			</div>
		</div>
		<cube-button>确认下单</cube-button>
		<cube-button @click="clearCart">清空购物车</cube-button>
	</section>
</template>

<script>
	import {mapState} from 'vuex'
	
	export default {
		name:'cart-page',
		data(){
			return{
				// cartArr:[]
			}
		},
		computed:{
			...mapState({  // 映射state数据
				cartArr:state=>state.cart.cartArry,
			})
		},
		methods:{
			// 减少商品
			subCart(index){
				this.$store.commit('cart/cartSub',index)
			},
			// 添加商品
			addCart(index){
				this.$store.commit('cart/cartAdd',index)
			},
			// 清空购物车
			clearCart(){
				this.$store.commit('cart/clearCart')
			}
		},
		mounted() {
			
		}
	}
</script>

<style scoped lang="less">
	@import '../style/public';
	
	.cart-page{
		button{
			width: 95%;
			margin: 10px auto;
			.shadow;
		}
	}
	
	.goods{
		font-size: 16px;
		.blockPadding(20px,10px);
		.flex-wrap(space-between);
		.goods-right{
			i{
				color:#e22222;
				font-size: 18px;
				.margin-Tb(0,5px);
			}
		}
	}
</style>