<template>
  <article class="register-page">
		
		<!-- <div id="nav" v-if="this.$route.path==='/user-register'">
		  <router-link to="/user-login">登录</router-link> |
		  <router-link to="/user-register">注册</router-link>
		</div> -->
		
		<img src="../../public/img/timg.jpg" alt="">
		<cube-form
		@submit="submitHandler"
		:model="model" 
		:schema="schema"
		></cube-form>
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
				password: '',
				phoneNum:''
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
				//手机号
				{
					type: 'input', // 组件类型
					modelKey: 'phoneNum', // 绑定数据源
					label: '手机号码', //
					props: {
						placeholder: '请输入手机号码'
					},
					rules: {
						//校验检测
						required: true, //是否必填
						type:'Number', //定义输入数据类型
						min:11, //限定最少字符长度
						max:11 //最大字符长度
					},
					trigger:'blur',
					messages:{
						required:'手机号不能为空',
						min:'手机号码不合法',
						max:'手机号码不合法'
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
					label:'注册'
				}
				]
			}
		}
	},
  components: {
    // UserInput
  },
	methods:{
		submitHandler(e){
			e.preventDefault();
			this.$http.get('/api/register',{params:this.model})
			.then(res=>{
				console.log(res);
				// console.log(res.success);
			})
			.catch(err=>{
				console.log(err);
			})
		},
	},
	mounted() {
	}
}

</script>

<style scoped lang="less">
	@import '../style/public';
</style>