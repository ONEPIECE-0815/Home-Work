<template>
	<article class="location-list">
		<!-- <ul class="list-wrap">
			<li v-for="(item,index) in locationArr" :key="index">
				
			</li>
		</ul> -->
		<ul class="list-wrap">
			<li v-for="(item,index) in addressArr" :key="index" @click="setAddress(index)">
				<i :class="['iconfont',defaultAddress==index?'icon-xuanze':'icon-xuanze1']"></i>
				<div class='list-content'>
					<p><span>{{item.personName}}</span><span>{{item.contact}}</span></p>
					<p><span>{{item.address}}</span></p>
				</div>
				<div class="btn-wrap">
					<span class="btn primary-btnColor">编辑</span>
					<span class="btn red-btn">删除</span>
				</div>
			</li>
		</ul>
		
		<button class="btn big" @click="toAddress">添加收货地址</button>
		
	</article>
</template>

<script>
	import {mapState} from 'vuex'
	
	export default {
		name:'location-list',
		data(){
			return{
				// defaultAddress:0,
				addressArr:[
					{
						personName:'张三',
						contact:'11111111111',
						address:'广东中山XX街道XXXX'
					},
					{
						personName:'李四',
						contact:'222222222222',
						address:'广东中山XX街道XXXX'
					},
				],
				
			}
		},
		methods:{
			toAddress(){
				this.$router.push({
					path:'/addNew-address',
				})
			},
			confirmToAdd(){
				let address = JSON.parse(localStorage.getItem('addressArr'));
				if(address.length==0){
					if(window.confirm('暂无地址信息!是否去添加新地址?')){
						this.$router.push({
							path:'/addNew-address',
						})
					}
				}
			},
			setAddress(index){
				if(window.confirm('是否更改默认地址?')){
					this.$store.commit('user/setDefaultAddress',index)
					// this.defaultAddress=index;
					// setTimeout(()=>this.$router.go(-1),500)
				}
			}
		},
		computed:{
			...mapState({  // 映射state数据
				locationArr:state=>state.user.addressArr,
				defaultAddress:state=>state.user.defaultAddress,
			})
		},
		created () {
			// this.confirmToAdd();
		},
	}
</script>

<style scoped lang="less">
	@import '../style/public';
	.location-list{
		
	}
	.list-wrap{
		flex: 1;
		li{
			// justify-content: space-between;
			.flex-wrap(space-between);
			.margin-Tb(0);
			
			.wh(90%,auto);
			.blockPadding(.4rem);
			.border-B;
			.list-content{
				flex: 1;
				border: 1px dashed rgba(0,0,0,.5);
				.margin-Tb(0,10px);
				.border-W(0,1px);
				.blockPadding(0,10px);
				p{
					.blockPadding;
				}
			}
			.iconfont{
				.wh(1rem,1rem,1rem);
				.t-a;
				.primaryColor-text;
				font-size: 24px;
			}
			// .t-btn{
			// 	margin-right: 5px;
			// 	font-size: 16px;
			// }
			.btn-wrap{
				align-self: stretch;
				.flex-wrap(space-around,center,initial,column);
				.btn{
					.blockPadding(4px,6px);
					.radius(3px);
					text-indent: 2px;
					letter-spacing: 2px;
					font-size: 12px;
				}
			}
		}
	}
	
</style>