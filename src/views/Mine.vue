<template>
	<section class="mine-page">
		<img src="../../public/img/timg.jpg" alt="">
		<ul>
			<li class="mine-item" v-for="item in mineArr" @click="itemClick(item)" :key="item.label">
				<span :class="['mine-title',item.type?'primaryColor-text':'']">{{item.label}}</span>
				<i class="cubeic-arrow"></i>
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		name:'mine-page',
		data(){
			return{
				mineArr:[
					{label:'商品收藏'},
					{label:'我的足迹'},
					{label:'店铺收藏'},
					{label:'我的订单'},
					{label:'收货地址管理',type:'locationList'},
					{label:'退出',type:'exit'},
				]
			}
		},
		methods:{
			itemClick(item){
				if(item.type=='exit'){
					if(window.confirm('是否确定退出登录?')){
						this.$store.commit('user/setToken','')
						localStorage.removeItem('token')
						this.$router.push({path:'/user-login'})
					}
				}
				if(item.type=='locationList'){
					this.$router.push({path:'/location-list'})
				}
				if(!item.type){
					alert('此功能暂未开放~请日后再试!')
				}
			}
		}
	}
</script>

<style scoped lang="less">
	@import '../style/public';
	.mine-page{
		img{
			.wh(100%,4rem);
		}
		.mine-item{
			color: #555;
			font-size: 16px;
			.border-B(1px,solid,#eee);
			line-height: 30px;
			.blockPadding(10px,10px);
			.flex-wrap(space-between);
		}
	}
</style>