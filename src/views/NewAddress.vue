<template>
	<article class="new-address">
		<!-- <el-amap class="amap-box" :vid="'amap-vue'"></el-amap> -->
		<section id="container"></section>
	</article>
</template>

<script>
	import AMap from 'AMap'
	export default {
		name:'new-address',
		data() {
			return {
				location:'',
				formattedAddress:'',
			};
		},
		created(){
		 	
		},
		methods:{
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
		// }
	}
</script>

<style scoped lang="less">
	@import '../style/public';
	#container{
		.wh(100%,8rem);
	}
</style>
