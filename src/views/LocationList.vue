<template>
	<article class="location-list">
		<!-- <ul class="list-wrap">
			<li v-for="(item,index) in locationArr" :key="index">
				
			</li>
		</ul> -->
		<ul class="list-wrap">
			<li v-for="(item,index) in addressArr" :key="index" @click="setAddress(index)">
				<i :class="['iconfont',currentAddressIndex==index?'icon-xuanze':'icon-xuanze1']"></i>
				<div class='list-content'>
					<p><span>{{item.personName}}-</span><span>{{item.contactNum}}</span></p>
					<p><span>{{item.formattedAddress}}</span></p>
				</div>
				<div class="btn-wrap">
					<span class="btn primary-btnColor">编辑</span>
					<span class="btn red-btn" @click.stop="delAddress(index)">删除</span>
				</div>
			</li>
		</ul>

		<button class="btn big" @click="toAddress">添加收货地址</button>

	</article>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		name: 'location-list',
		data() {
			return {

			}
		},
		methods: {
			toAddress() {
				this.$router.push({
					path: '/addNew-address',
				})
			},
			confirmToNewAddress() {
				let address = JSON.parse(localStorage.getItem('addressArr'));
				if (address.length == 0) {
					if (window.confirm('暂无地址信息!是否去添加新地址?')) {
						this.$router.push({
							path: '/addNew-address',
						})
					}
				}
			},
			setAddress(index) {
				if (localStorage.getItem('currentAddressIndex') != index) {
					if (window.confirm('是否更改默认地址?')) {
						this.$store.commit('user/setCurrentAddressIndex', index)
						// this.defaultAddress=index;
						// setTimeout(()=>this.$router.go(-1),500)
					}
				}
			},
			delAddress(index) {
				if (localStorage.getItem('currentAddressIndex') == index) {
					if (window.confirm('删除默认地址后将会设置列表第一个为默认地址?')) {
						this.$store.commit('user/delAddress', index);
						this.$store.commit('user/setCurrentAddressIndex', 0)
					}
				}else{
					if (window.confirm('确认删除此收件地址吗?')) {
						this.$store.commit('user/delAddress', index);
						this.$store.commit('user/setCurrentAddressIndex', index)
					}
				}
			}
		},
		computed: {
			...mapState({ // 映射state数据
				locationArr: state => state.user.addressArr,
				currentAddressIndex: state => state.user.currentAddressIndex,
				addressArr: state => state.user.addressArr,
			})
		},
		created() {
			this.confirmToNewAddress();
		},
	}
</script>

<style scoped lang="less">
	@import '../style/public';

	.location-list {}

	.list-wrap {
		flex: 1;

		li {
			// justify-content: space-between;
			.flex-wrap(space-between);
			.margin-Tb(0);

			.wh(90%, auto);
			.blockPadding(.4rem);
			.border-B;

			.list-content {
				flex: 1;
				border: 1px dashed rgba(0, 0, 0, .5);
				.margin-Tb(0, 10px);
				.border-W(0, 1px);
				.blockPadding(0, 10px);

				p {
					.blockPadding;
				}
			}

			.iconfont {
				.wh(1rem, 1rem, 1rem);
				.t-a;
				.primaryColor-text;
				font-size: 24px;
			}

			// .t-btn{
			// 	margin-right: 5px;
			// 	font-size: 16px;
			// }
			.btn-wrap {
				align-self: stretch;
				.flex-wrap(space-around, center, initial, column);

				.btn {
					.blockPadding(4px, 6px);
					.radius(3px);
					text-indent: 2px;
					letter-spacing: 2px;
					font-size: 12px;
				}
			}
		}
	}
</style>
