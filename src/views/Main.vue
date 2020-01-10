<template>
	
	<article class="main-page">
		
		<transition :name='transitionName' mode="out-in">
			<!-- <keep-alive> -->
				<router-view class="router"></router-view>
			<!-- </keep-alive> -->
		</transition>
		
		<cube-tab-bar
			class='main-nav'
			v-model="selectedLabelDefault"
			:data="tabs" 
			@click="clickHandler"
			@change="changeHandler">
		</cube-tab-bar>
		
		<span v-if="countSum>0" class="count-sum">{{countSum}}</span>
		
	</article>
	
</template>

<script>
	
	import {mapGetters} from 'vuex'
	
	export default {
		name:'main-page',
		data() {
			return {
				// countSum:10,
				transitionName:'slide-right',
				selectedLabelDefault: '',
				tabs: [{
					label: '首页',
					icon: 'cubeic-home'
				}, {
					label: '分类',
					icon: 'cubeic-tag'
				}, 
				// {
				// 	label: '搜索',
				// 	icon: 'cubeic-search'
				// }, 
				{
					label: '购物车',
					icon: 'cubeic-mall'
				}, {
					label: '我的',
					icon: 'cubeic-person'
				}]
			}
		},
		computed:{
			...mapGetters({
				countSum:'cart/countSum'
			})
		},
		methods: {
			clickHandler(label) {
				// if you clicked home tab, then print 'Home'
			},
			changeHandler(label) {
				// if you clicked different tab, this methods can be emitted
				switch(label){
					case '首页':
					this.$router.push({path:'/main/index'});
					break;
					case '分类':
					this.$router.push({path:'/main/list'});
					break;
					// case '搜索':
					// this.$router.push({path:'/main/search'});
					// break;
					case '购物车':
					this.$router.push({path:'/main/cart'});
					break;
					case '我的':
					this.$router.push({path:'/main/mine'});
					break;
				}
			}
		},
		mounted() {
			switch(this.$route.path){
				case '/main/index':
				this.selectedLabelDefault = '首页';
				break;
				case '/main/list':
				this.selectedLabelDefault = '分类';
				break;
				// case '/main/search':
				// this.selectedLabelDefault = '搜索';
				// break;
				case '/main/cart':
				this.selectedLabelDefault = '购物车';
				break;
				case '/main/mine':
				this.selectedLabelDefault = '我的';
				break;
			}
		}
	}
</script>

<style lang="less">
	
	@import '../style/public';
	
	.main-page{
		.wh(100vw,100vh);
		.maxWh(100vw,100vh);
		overflow: hidden;
		.flex-wrap(space-between,initial,nowrap,column);
		.index-page{
			padding-top: 5%;
		}
		section:first-child{
			flex: 1;
			z-index: 1;
			.overfA;
		}
	}
	
	.cube-tab-bar.main-nav{
		.shadow(10px);
		.blockPadding(5px,0);
		background-color: #fff;
		// z-index: 999;
		// font-size: 16px;
		.cube-tab{
			font-size: 16px;
		}
		.cubeic-home{
			display: block;
		}
	}
	.count-sum{
		.wh(18px,18px);
		.flex-wrap;
		.radius(50%);
		font-size: 12px;
		position: fixed;
		bottom: 33px;
		right: 30%;
		z-index: 1000;
		background-color: #e22222;
		color: #fff;
	}
</style>
