<template>
	<article class="new-formattedAddress">
		<!-- <el-amap class="amap-box" :vid="'amap-vue'"></el-amap> -->
		<section id="container"></section>
		<section class="info-wrap">
			<div class="info-item">
				<span>收件地址</span>
				<input type="text" v-model="addressInfo.formattedAddress">
			</div>
			<div class="info-item">
				<span>收件人</span>
				<input type="text" v-model="addressInfo.personName">
			</div>
			<div class="info-item">
				<span>联系电话</span>
				<input type="text" v-model="addressInfo.contactNum">
			</div>
			<button class="btn big" @click="submitAddress()">确认添加</button>
		</section>
	</article>
</template>

<script>
	// import AMap from 'AMap'
	export default {
		name: 'new-formattedAddress',
		data() {
			return {
				location: null,
				map: null,
				addressInfo: {
					formattedAddress: '',
					personName: '',
					contactNum: '',
				},
				formattedAddressModel: null,
				marker: null,
				mapCenter: null,
				startIcon: null,
			};
		},
		created() {

		},
		mounted() {
			this.$nextTick(() => {
				this.initAmap();
				this.createIcon();
				this.setMapMoveListener();
			})
		},
		methods: {
			initAmap(location) {
				this.map = new AMap.Map('container', {
					resizeEnable: true, //是否监控地图容器尺寸变化
					zoom: 9, //初始化地图层级
					// center: [116.397428, 39.90923], //初始化地图中心点
				});
				this.getBrowserLocation();
			},
			getBrowserLocation() { //获取浏览器定位信息
				// 精确定位
				AMap.plugin('AMap.Geolocation', () => {
					var geolocation = new AMap.Geolocation({
						enableHighAccuracy: true, //是否使用高精度定位，默认:true
						timeout: 10000, //超过10秒后停止定位，默认：5s
						buttonPosition: 'RB', //定位按钮的停靠位置
						buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
						zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
					});
					this.map.addControl(geolocation);
					geolocation.getCurrentPosition((status, result) => {
						// console.log(result);
						if (status == 'complete') {
							this.location = result.position;
							// console.log(this.location);
							this.addMark(this.location);
							this.convertLocationToAddress(this.location);
						} else {
							onError(result)
						}
					});
				});
			},
			resetMapCenter(map) {
				this.mapCenter = map.getCenter();
			},
			createIcon() {
				this.startIcon = new AMap.Icon({
					// 图标尺寸
					size: new AMap.Size(25, 34),
					// 图标的取图地址
					image: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
					// 图标所用图片大小
					imageSize: new AMap.Size(135, 40),
					// 图标取图偏移量
					imageOffset: new AMap.Pixel(-51, -3)
				});
			},
			addMark(location) {
				this.marker = new AMap.Marker({ // 实例化点标记
					icon: this.startIcon,
					// icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
					position: [location.lng, location.lat],
					offset: new AMap.Pixel(-13, -30),
				});
				this.marker.setMap(this.map);
			},
			setMapMoveListener() {
				this.map.on('movestart', () => {
					this.map.remove(this.marker);
				})
				this.map.on('moveend', () => {
					this.resetMapCenter(this.map);
					this.addMark(this.mapCenter);
					this.convertLocationToAddress(this.mapCenter);
				})
			},

			convertLocationToAddress(location) {
				let geocoder = new AMap.Geocoder({
					city: "010", //城市设为北京，默认：“全国”
					radius: 1000 //范围，默认：500
				});
				geocoder.getAddress(location, (status, result) => {
					if (status === 'complete' && result.regeocode) {
						this.addressInfo.formattedAddress = result.regeocode.formattedAddress;
					} else {
						log.error('根据经纬度查询地址失败')
					}
				});
			},

			submitAddress() {
				if (this.addressInfo.formattedAddress && this.addressInfo.personName && this.addressInfo.contactNum) {
					if (window.confirm('地址信息无误请确认,提交后返回上一页')) {
						this.$store.commit('user/addNewAddress', this.addressInfo);
						this.$router.go(-1);
					}
				} else {
					alert('信息尚未填写完整,请填写完整后提交!');
				}
			}
		}
	}
</script>

<style scoped lang="less">
	@import '../style/public';

	#container {
		.wh(100%, 10rem);
		.shadow;
	}
	.info-wrap{
		.margin-t-b(.5rem);
		text-align: center;
	}
	.info-item{
		.wh(90%,auto);
		.lh(.8rem);
		.border(#888);
		.radius(4px);
		.flex-wrap(initial,center);
		.margin-t-b(0,.4rem);
		font-size: .4rem;
		&>span:first-child{
			.flex-items(20%,0,0);
			.border-R;
			padding-right: 10px;
			text-align: right;
		}
		input{
			.margin-t-b(0,0,10px);
			outline: none;
			flex:1
		}
	}
	.big{
		.wh(90%,auto);
		.margin-Tb();
		.radius;
	}
</style>
