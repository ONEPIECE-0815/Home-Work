<template>
	<section class="list-box">

		<cube-scroll class='left-nav'>
			<ul>
				<li v-for="(item,index) in tabLabel" :class="[currentNav==index?'active':'']" :key='index' @click="selectList(index)">
					{{item.label}}
				</li>
			</ul>
		</cube-scroll>

		<cube-scroll class='list-content'>
			<ul>
				<li v-for="(item,index) in tags" :key='index'>
					<img :src="item.imageUrl" alt="">
					<p>{{item.label}}<i class="cubeic-add" @click="addToCart($event,item)"></i></p>
				</li>
			</ul>
		</cube-scroll>
		
		<div class="ball-wrap">
			<transition
				@before-enter="beforeEnter"
				@enter="enter"
				@afterEnter="afterEnter"
				>
				<div v-if="ball.show" class="ball">
					<div class="inner">
						<i class="cubeic-add"></i>
					</div>
				</div>
			</transition>
		</div>
		
	</section>
</template>

<script>
	export default {
		name: 'list-page',
		data() {
			return {
				currentNav: 0,
				tags: [],
				ball:{
					show:false,
					el:'',
				},
				tabLabel: [{
						label: '热门推荐',
					},
					{
						label: '手机数码',
					},
					{
						label: '家用电器',
					},
					{
						label: '厨电一体',
					},
					{
						label: '美妆护肤',
					},
					{
						label: '男装',
					},
					{
						label: '女装',
					},
				]
			}
		},
		methods: {
			
			//添加商品到购物车
			addToCart(e, tag) {
				this.$store.commit('cart/toCart', tag);
				
				//显示小球
				this.ball.show = true;
				//获取点击元素
				this.ball.el = e.target;
				// console.log(this.ball.el)
			},

			selectList(index) {
				if (this.currentNav != index) {
					this.currentNav = index;
				}
				this.getClassify(index);
			},
			// 获取分类
			async getClassify(index) {
				// 接收返回结果
				const result = await this.$http.get('/api/classify', {
					params: {
						type: index
					}
				})
				// 存储返回数据
				this.tags = result.data;
			},
			
			//购物车动画 s===================
			beforeEnter(el){
				// 让小球移动到点击位置
				// 获取点击位置
				const dom = this.ball.el; // addToCart方法已赋值
				// console.log(dom);
				const rect = dom.getBoundingClientRect()  //获取点击dom的位置
				console.log(rect);
				const x = rect.left-window.innerWidth*0.7
				const y = -(window.innerHeight-rect.top)
				// console.log(x,y)
				el.style.display = 'block'
				el.style.transform = `translate3d(0,${y}px,0)`
				const inner = el.querySelector('.inner')
				inner.style.transform = `translate3d(${x}px,0,0)`
			},
			enter(el,done){
				//触发重绘重排
				document.body.offsetHeight;
				// 小球回到初始位置
				el.style.transform = `translate3d(0,0,0)`
				const inner = el.querySelector('.inner')
				inner.style.transform = `translate3d(0,0,0)`
				//过渡完成后执行的事件
				el.addEventListener('transitionend',done)
			},
			afterEnter(el){
				this.ball.show = false;
				el.style.display = 'none'
			},
			//购物车动画 e===================
		},
		created() {
			// 获取默认分类数据
			this.getClassify(0);
		}
	}
</script>

<style scoped lang="less">
	@import '../style/public';

	.list-box {
		.flex-wrap;

		.left-nav {
			font-size: 14px;
			.flex-items(24%, 0, 0);

			ul {
				.flex-wrap(center, center, wrap, column);
			}

			li {
				.t-a;
				width: 100%;
				background-color: #eee;
				line-height: 1.2rem;
				box-sizing: border-box;
			}
		}

		.list-content {
			flex: 1;
			align-self: stretch;
			.overfA;

			ul {
				max-width: 100%;
				font-size: 14px;
				.flex-wrap(center, flex-start, wrap, initial);

				li {
					// align-self: stretch;

					.flex-items(40%, 0, 0);
					.blockPadding(5px, 10px);
					.flex-wrap(flex-start, center, wrap, column);

					img {
						.wh(2rem, 2rem);
					}
				}
			}

			.cubeic-add {
				margin-left: 5px;
				color: #e22222;
			}

			p {
				margin-top: 5px;
				text-indent: 5px;
			}
		}

		.active {
			color: #1195DB;
			border-left: 3px solid #1195DB;
			background-color: #fff !important;
		}
		.ball-wrap{
			.ball{
				position: fixed;
				left: 70%;
				bottom: 10px;
				color: #e22222;
				z-index: 999;
				transition: all .6s cubic-bezier(0.49,-0.29,0.75,0.41);
				.inner{
					.wh(16px,16px);
					transition: all .6s linear;
				}
			}
		}
	}
</style>
