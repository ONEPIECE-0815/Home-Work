<template>
	<section class="user-input-wrap">
		<cube-form 
		@submit="submitHandler"
		:model="model" 
		:schema="schema"
		></cube-form>
		<!-- v-if="login" -->
		<!-- @reset="resetHandler" -->
		<!-- @validate="validateHandler" -->
		<!-- :immediate-validate="false" -->
		<!-- :options="options" -->
	</section>
</template>

<script>
	export default {
		name: 'user-info',
		props: {
			login: {
				type: Boolean,
				required: false,
			},
			register: {
				type: Boolean,
				required: false,
			}
		},
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
						type: 'input',//组件类型
						modelKey: 'userName',//绑定数据源
						label: '用户名',//
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
							min:'用户名不得少于2个字符',
							max:'用户名不得大于10个字符'
						}
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
		methods:{
			submitHandler(e){
				e.preventDefault();
				this.$http.get('/api/register',{params:this.model})
				.then(res=>{
					console.log(res.data.success);
				})
				.catch(err=>{
					console.log(err);
				})
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
