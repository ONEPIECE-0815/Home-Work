<template>
	<section class="index-page">
		
		<!-- 轮播图 -->
		<cube-slide ref="slide" class="index-banner" :data="items" @change="changePage">
		  <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
		    <a :href="item.url">
		      <img :src="item.image">
		    </a>
		  </cube-slide-item>
		</cube-slide>
		
		<!-- 滚动分类 -->
		<cube-slide ref="slideLists" class='navList' :auto-play="false" :data="lists" @change="changePage">
		  <cube-slide-item v-for="(list, index) in lists" :key="index">
				<ul>
					<li v-for="(item,index) in list" :key="index">
						<a :href="item.url">
							<img :src="item.image" alt="">
							<p>{{item.label}}</p>
						</a>
					</li>
				</ul>
		  </cube-slide-item>
		</cube-slide>
	</section>
</template>

<script>
	export default {
		name:'index-page',
	  data() {
	    return {
				items:[],//轮播数组
				lists:[],//滚动分类数组
	    }
	  },
	  methods: {
	    changePage(current) {
	      // console.log('当前轮播图序号为:' + current)
	    },
	    clickHandler(item, index) {
	      console.log(item, index)
	    },
	  },
		async created() {
			try{
				//获取轮播图
				const items = await this.$http.get('/api/banner')
				// console.log(items);
				this.items = items.data;
				
				const lists = await this.$http.get('/api/rollingList')
				this.lists = lists.data;
				
			}catch(err){
				console.log(err);
			}
		}
	}
</script>

<style lang="less">
	
	@import '../style/public';
	
	.index-banner{
		.wh(9.5rem,3rem);
		.radius(10px);
		.margin-Tb(0);
		.shadow;
		img{.maxWh};
	}
	.navList{
		.wh(10rem,auto);
		.margin-Tb;
		ul{
			.maxWh(100%);
			// justify-content: space-between;
			// .flex-wrap(flex-start,center,wrap);
			.blockPadding(0,5%);
			.clearfix;
			li{
				.float;
				.wh(20%,auto);
				.flex-wrap;
				a{
					display: block;
					
				}
				img{
					.wh(1.2rem,1.2rem);
					.radius(50%);
					.blockPadding(10px,10px)
				}
				p{
					font-size: 14px;
					text-align: center;
					.lh;
				}
			}
		}
	}
	.index-banner>.cube-slide-dots{
		bottom: .2rem;
	}
	.navList>.cube-slide-dots{
		position: relative;
		padding: 10px 0;
	}
	
</style>
