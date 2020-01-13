<template>
	<article class="new-formattedAddress">
		<!-- <el-amap class="amap-box" :vid="'amap-vue'"></el-amap> -->
		<section id="container"></section>
	</article>
</template>

<script>
	import AMap from 'AMap'
	export default {
		name: 'new-formattedAddress',
		data() {
			return {
				location: null,
				map: null,
				formattedAddress: '',
				formattedAddressModel: null,
				marker: null,
				mapCenter:null,
			};
		},
		created() {

		},
		mounted() {
			this.$nextTick(() => {
				this.initAmap();
				this.setMapMoveListener();
			})
		},
		methods: {
			initAmap(location) {
				this.map = new AMap.Map('container', {
					resizeEnable: true, //是否监控地图容器尺寸变化
					zoom: 11, //初始化地图层级
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
						console.log(result);
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
			
			getMapCenter(map){
				this.mapCenter=map.getCenter();
				console.log(this.mapCenter.lng,this.mapCenter.lat);
				this.setMark(this.mapCenter);
			},
			setMark(center){
				console.log(this.marker);
				this.marker.position = [center.lng,center.lat];
			},
			addMark(location) {
				this.marker = new AMap.Marker({ // 实例化点标记
					icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
					position: [location.lng,location.lat],
					offset: new AMap.Pixel(-13, -30)
				});
				this.marker.setMap(this.map);
			},
			setMapMoveListener() {
				this.map.on('moveend',()=>{
					this.getMapCenter(this.map);
				})
			},
			convertLocationToAddress(location) {
				let geocoder = new AMap.Geocoder({
					city: "010", //城市设为北京，默认：“全国”
					radius: 1000 //范围，默认：500
				});
				geocoder.getAddress(location, (status, result) => {
					if (status === 'complete' && result.regeocode) {
						this.formattedAddress = result.regeocode.formattedAddress;
						alert(this.formattedAddress);
						// document.getElementById('formattedAddress').value = formattedAddress;
					} else {
						log.error('根据经纬度查询地址失败')
					}
				});
			},
			updateAddress() {}


		}
	}
</script>

<style scoped lang="less">
	@import '../style/public';

	#container {
		.wh(100%, 8rem);
	}
</style>
