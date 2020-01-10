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
				location: '',
				map: null,
				formattedAddress: '',
				formattedAddressModel: null,
				marker: null,
			};
		},
		created() {

		},
		mounted() {
			this.$nextTick(() => {
				this.initAmap();
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
			getBrowserLocation() {
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
							console.log(this.location);
							this.addMark(this.location);
							this.convertLocationToAddress(this.location);
						} else {
							onError(result)
						}
					});
				});
			},
			// getIpLocation() {},
			addMark(location) {
				this.marker = new AMap.Marker({
					icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
					position: [location.lng, location.lat],
					offset: new AMap.Pixel(-13, -30)
				});
				this.marker.setMap(this.map);
			},
			setMapMoveListener() {},
			convertLocationToAddress(location) {
				let geocoder = new AMap.Geocoder({
					city: "010", //城市设为北京，默认：“全国”
					radius: 1000 //范围，默认：500
				});
				geocoder.getAddress(location, (status, result)=> {
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

			// 	getLocation(){ // 从高德地图api获取浏览器定位
			// 	  const that = this
			// 	  AMap.plugin('AMap.Geolocation', function() {
			// 	    let geolocation = new AMap.Geolocation({
			// 	      // 是否使用高精度定位，默认：true
			// 	      enableHighAccuracy: true,
			// 	      // 设置定位超时时间，默认：无穷大
			// 	      timeout: 10000
			// 	    })

			// 	    geolocation.getCurrentPosition()
			// 	    AMap.event.addListener(geolocation, 'complete', onComplete)
			// 	    AMap.event.addListener(geolocation, 'error', onError)

			// 	    function onComplete (data) {
			// 	      // data是具体的定位信息
			// 	      console.log(data);
			// 				that.location=data;
			// 				that.formattedAddress = data.formattedAddress;
			// 	    }

			// 	    function onError (data) {
			// 	      // 定位出错
			// 	      that.getLatLngLocation()
			// 	    }
			// 	  })
			// 	},
			// 	getLatLngLocation(){
			// 	  AMap.plugin('AMap.CitySearch', function () {
			// 	    let citySearch = new AMap.CitySearch()
			// 	    citySearch.getLocalCity(function (status, result) {
			// 	      if (status === 'complete' && result.info === 'OK') {
			// 	        // 查询成功，result即为当前所在城市信息
			// 	        AMap.plugin('AMap.Geocoder', function() {
			// 	          let geocoder = new AMap.Geocoder({
			// 	            // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
			// 	            city: result.adcode
			// 	          })
			// 	          let lnglat = result.rectangle.split(";")[0].split(",")
			// 	          geocoder.getAddress(lnglat, function(status, data) {
			// 	            if (status === 'complete' && data.info === 'OK') {
			// 	              // data为对应的地理位置详细信息
			// 	            }
			// 	          })
			// 	        })
			// 	      }
			// 	    })
			// 	  })
			// 	},
			// 	init () {
			// 		console.log(this.location);
			// 		let map = new AMap.Map('container', {
			// 			// center: [lng,lat],
			// 			resizeEnable: true,
			// 			zoom: 13,
			// 		})
			// 		let trafficLayer = new AMap.TileLayer.Traffic({
			// 				zIndex: 10
			// 		});
			// 		// map.add(trafficLayer);
			// 	}
			// },
			// mounted(){
			// 	this.getLocation();
			// 	this.init();
		}
	}
</script>

<style scoped lang="less">
	@import '../style/public';

	#container {
		.wh(100%, 8rem);
	}
</style>
