<template>
	<article class="location-list">
		<!-- <ul class="list-wrap">
			<li v-for="(item,index) in locationArr" :key="index">
				
			</li>
		</ul> -->
		<ul class="list-wrap">
			<li v-for="(item,index) in addressArr" :key="index">
				<i :class="['iconfont','icon-xuanze']"></i>
				<div class='list-content'>
					<p><span>{{item.name}}</span><span>{{item.contact}}</span></p>
					<p><span>{{item.address}}</span></p>
				</div>
				<span class="btn">编辑</span>
			</li>
		</ul>
		
		<button class="btn" @click="toAddress">添加收货地址</button>
	</article>
</template>

<script>
	import {mapState} from 'vuex'
	
	export default {
		name:'location-list',
		data(){
			return{
				addressArr:[
					{
						name:'a',
						contact:'12312123',
						address:'广东中山XX街道XXXX'
					},
					{
						name:'b',
						contact:'12312123',
						address:'广东中山XX街道XXXX'
					},
					{
						name:'c',
						contact:'12312123',
						address:'广东中山XX街道XXXX'
					},
					{
						name:'d',
						contact:'12312123',
						address:'广东中山XX街道XXXX'
					},
					{
						name:'e',
						contact:'12312123',
						address:'广东中山XX街道XXXX'
					}
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
			}
		},
		computed:{
			...mapState({  // 映射state数据
				locationArr:state=>state.user.addressArr,
			})
		},
		created () {
			// this.confirmToAdd();
		},
	}
</script>

<style scoped lang="less">
	@import '../style/public';
</style>
