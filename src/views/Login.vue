<template>
  <article class="login-page">
		
		<!-- <div id="nav" v-if="this.$route.path==='/user-login'">
		  <router-link to="/user-login">登录</router-link> |
		  <router-link to="/user-register">注册</router-link>
		</div> -->
		
		<img src="../../public/img/timg.jpg" alt="">
		
		<cube-form
		@submit="submitHandler"
		:model="model" 
		:schema="schema"
		>
		</cube-form>
		
  </article>
</template>

<script>
// @ is an alias to /src
// import UserInput from '@/components/UserInput.vue'

export default {
  name: 'register-page',
	data() {
		return {
			model: {
				userName: '',
				password: ''
			},
			schema: {
				fields: [
					//用户名配置
					{
					type: 'input', // 组件类型
					modelKey: 'userName', // 绑定数据源
					label: '用户名', //
					props: {
						placeholder: '请输入用户名'
					},
					rules: {
						//校验检测
						required: true, //是否必填
						type:'string', //定义输入数据类型
						min:3, //限定最少字符长度
						max:10 //最大字符长度
					},
					trigger:'blur',
					messages:{
						required:'用户名不能为空',
						min:'用户名不得少于3个字符',
						max:'用户名不得大于10个字符'
					},
				},
				//密码配置
				{
					type: 'input',
					modelKey: 'password',
					label: '密码',
					props: {
						placeholder: '请输入密码',
						type:'password',
						eye:{ //密码类型的眼睛按钮
							open:false
						}
					},
					rules: {
						//校验检测
						required: true,
					},
					trigger:'blur',
				},
				{
					type:'submit',
					label:'登录'
				}
				]
			}
		}
	},
	mounted() {
		
	},
  components: {
    // UserInput
  },
	methods:{
		async submitHandler(e){
			e.preventDefault()
			try{
				const result = await this.$http.get('/api/login',{params:this.model})
				// console.log(result.data.token)
				// const objToStr = JSON.stringify(result.data)//对象转字符串
				// const strToObj = JSON.parse(str) 
				if(result.code == '0'){
					this.$store.commit('user/setToken',result.token)
					window.localStorage.setItem('token',result.token)//get,set,remove Item 操作localStorage
					alert(result.message);
					// 判断路由是否带参,带参就去到重定向地址,没有就去首页
					if(this.$route.query.redirect){
						this.$router.replace({path:this.$route.query.redirect})
					}else{
						this.$router.replace({path:'/main/index'})
					}
				}else{
					// let tmp = JSON.parse(window.localStorage.getItem('token'))
					// console.log(tmp);
					alert(result.message);
				}
			}catch(err){
				console.log(err);
			}
		},
	}
}

</script>

<style scoped lang="less">
	@import '../style/public';
</style>