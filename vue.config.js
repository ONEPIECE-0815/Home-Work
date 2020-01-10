// 配置 https://blog.csdn.net/qq_39725309/article/details/81558332

module.exports = {
	configureWebpack: {
		devServer: {
			// port: 8080, //端口号
			open: true,
			host: '0.0.0.0',
			
			// mock模拟数据
			before(app) {
				// app.get('请求地址',(req,res)=>{
				// 	res.json({
				// 	})
				// })

				// 用户信息池
				let userpoor = [{
						userName: 'abc',
						password: '123456',
						// phoneNum: '13528109000'
					},
					{
						userName: 'def',
						password: '1'
					},
				];
				// 注册接口
				app.get('/api/register', (req, res) => {
					const {
						userName,
						password
					} = req.query
					const userLength = userpoor.filter(item => item.userName == userName).length
					if (userLength > 0) {
						res.json({
							success: false,
							message: '用户名已存在'
						})
					} else {
						res.json({
							success: true,
							message: '注册成功'
						})
					}
				});
				//登录接口
				let tokenkey = 'msdemo'
				app.get('/api/login', (req, res) => {
					const {
						userName,
						password
					} = req.query
					if (userName == 'abc' && password == '123456' || userName == 'def' && password == '1') {
						res.json({
							code: 0,
							message: '登录成功',
							token: tokenkey + '-' + userName + '-' + (new Date().getTime() + 60 * 60 * 1000)
						})
					} else {
						res.json({
							code: 1,
							message: '账号或密码错误'
						})
					}
				})
				//index轮播接口
				app.get('/api/banner', (req, res) => {
					res.json({
						data: [{
								url: 'http://www.didichuxing.com/',
								image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
							},
							{
								url: 'http://www.didichuxing.com/',
								image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
							},
							{
								url: 'http://www.didichuxing.com/',
								image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
							},
						]
					})
				})
				// 滚动分类接口
				app.get('/api/rollingList', (req, res) => {
					res.json({
						data: [
							[{
									url: 'http://www.didichuxing.com/',
									image: '/img/a.jpg',
									label: '分类一'
								},
								{
									url: 'http://www.didichuxing.com/',
									image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576214608824&di=9a6e417c174748be7f5c0c5fff6a843f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0197935711ee3c6ac7251343b3addc.jpg',
									label: '分类一'
								},{
									url: 'http://www.didichuxing.com/',
									image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576214608824&di=9a6e417c174748be7f5c0c5fff6a843f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0197935711ee3c6ac7251343b3addc.jpg',
									label: '分类一'
								},{
									url: 'http://www.didichuxing.com/',
									image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576214608824&di=9a6e417c174748be7f5c0c5fff6a843f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0197935711ee3c6ac7251343b3addc.jpg',
									label: '分类一'
								},
								{
									url: 'http://www.didichuxing.com/',
									image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576214608824&di=9a6e417c174748be7f5c0c5fff6a843f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0197935711ee3c6ac7251343b3addc.jpg',
									label: '分类一'
								},
							],
							[{
									url: 'http://www.didichuxing.com/',
									image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576214608824&di=9a6e417c174748be7f5c0c5fff6a843f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0197935711ee3c6ac7251343b3addc.jpg',
									label: '分类二'
								},
								{
									url: 'http://www.didichuxing.com/',
									image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576214608824&di=9a6e417c174748be7f5c0c5fff6a843f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0197935711ee3c6ac7251343b3addc.jpg',
									label: '分类二'
								},
								{
									url: 'http://www.didichuxing.com/',
									image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576214608824&di=9a6e417c174748be7f5c0c5fff6a843f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0197935711ee3c6ac7251343b3addc.jpg',
									label: '分类二'
								},
							]
						]
					})
				})
			
				// 获取分类页的分类接口
				app.get('/api/classify',(req,res)=>{
					switch(req.query.type){
						case '0':
						res.json({
							errno:0,
							data:[
								{
									imageUrl:'http://n.sinaimg.cn/tech/crawl/20160301/KQev-fxpvytf8791749.jpg',
									label:'小米'
								},
								{
									imageUrl:'http://img1.gtimg.com/digi/pics/hv1/3/154/1026/66754923.jpg',
									label:'华为'
								},
								{
									imageUrl:'http://article.fd.zol-img.com.cn/t_s640x2000/g2/M00/09/08/Cg-4WVUaQ7uIdBydAAI6FgQWUyYAAAmGQA2xAEAAjou108.jpg',
									label:'荣耀'
								},
								{
									imageUrl:'http://pic.3h3.com/up/2012-11/20121111331105116169.jpg',
									label:'苹果'
								},
								{
									imageUrl:'https://www.cpnic.com/UploadFiles/img_0_3191302475_380723977_26.jpg',
									label:'小米'
								},
								{
									imageUrl:'http://img1.gtimg.com/digi/pics/hv1/3/154/1026/66754923.jpg',
									label:'华为'
								},
								{
									imageUrl:'http://img1.gtimg.com/digi/pics/hv1/3/154/1026/66754923.jpg',
									label:'华为'
								},
								{
									imageUrl:'http://article.fd.zol-img.com.cn/t_s640x2000/g2/M00/09/08/Cg-4WVUaQ7uIdBydAAI6FgQWUyYAAAmGQA2xAEAAjou108.jpg',
									label:'荣耀'
								},
								{
									imageUrl:'http://pic.3h3.com/up/2012-11/20121111331105116169.jpg',
									label:'苹果'
								},
								{
									imageUrl:'https://www.cpnic.com/UploadFiles/img_0_3191302475_380723977_26.jpg',
									label:'小米'
								},
							]
						});
						break;
						case '1':
						res.json({
							errno:0,
							data:[
								{
									imageUrl:'http://n.sinaimg.cn/tech/crawl/20160301/KQev-fxpvytf8791749.jpg',
									label:'小米'
								},
								{
									imageUrl:'http://img1.gtimg.com/digi/pics/hv1/3/154/1026/66754923.jpg',
									label:'华为'
								},
								{
									imageUrl:'http://article.fd.zol-img.com.cn/t_s640x2000/g2/M00/09/08/Cg-4WVUaQ7uIdBydAAI6FgQWUyYAAAmGQA2xAEAAjou108.jpg',
									label:'荣耀'
								},
								{
									imageUrl:'http://pic.3h3.com/up/2012-11/20121111331105116169.jpg',
									label:'苹果'
								},
								{
									imageUrl:'https://www.cpnic.com/UploadFiles/img_0_3191302475_380723977_26.jpg',
									label:'小米'
								},
								{
									imageUrl:'http://img1.gtimg.com/digi/pics/hv1/3/154/1026/66754923.jpg',
									label:'华为'
								},
								{
									imageUrl:'http://article.fd.zol-img.com.cn/t_s640x2000/g2/M00/09/08/Cg-4WVUaQ7uIdBydAAI6FgQWUyYAAAmGQA2xAEAAjou108.jpg',
									label:'荣耀'
								},
								{
									imageUrl:'http://pic.3h3.com/up/2012-11/20121111331105116169.jpg',
									label:'苹果'
								},
								{
									imageUrl:'https://www.cpnic.com/UploadFiles/img_0_3191302475_380723977_26.jpg',
									label:'小米'
								},
								{
									imageUrl:'http://img1.gtimg.com/digi/pics/hv1/3/154/1026/66754923.jpg',
									label:'华为'
								},
								{
									imageUrl:'http://article.fd.zol-img.com.cn/t_s640x2000/g2/M00/09/08/Cg-4WVUaQ7uIdBydAAI6FgQWUyYAAAmGQA2xAEAAjou108.jpg',
									label:'荣耀'
								},
								{
									imageUrl:'http://pic.3h3.com/up/2012-11/20121111331105116169.jpg',
									label:'苹果'
								},
								{
									imageUrl:'http://n.sinaimg.cn/tech/crawl/20160301/KQev-fxpvytf8791749.jpg',
									label:'小米'
								},
								{
									imageUrl:'http://img1.gtimg.com/digi/pics/hv1/3/154/1026/66754923.jpg',
									label:'华为'
								},
								{
									imageUrl:'http://article.fd.zol-img.com.cn/t_s640x2000/g2/M00/09/08/Cg-4WVUaQ7uIdBydAAI6FgQWUyYAAAmGQA2xAEAAjou108.jpg',
									label:'荣耀'
								},
								{
									imageUrl:'http://pic.3h3.com/up/2012-11/20121111331105116169.jpg',
									label:'苹果'
								},
								{
									imageUrl:'https://www.cpnic.com/UploadFiles/img_0_3191302475_380723977_26.jpg',
									label:'小米'
								},
								{
									imageUrl:'http://img1.gtimg.com/digi/pics/hv1/3/154/1026/66754923.jpg',
									label:'华为'
								},
								{
									imageUrl:'http://article.fd.zol-img.com.cn/t_s640x2000/g2/M00/09/08/Cg-4WVUaQ7uIdBydAAI6FgQWUyYAAAmGQA2xAEAAjou108.jpg',
									label:'荣耀'
								},
								{
									imageUrl:'http://pic.3h3.com/up/2012-11/20121111331105116169.jpg',
									label:'苹果'
								},
								{
									imageUrl:'https://www.cpnic.com/UploadFiles/img_0_3191302475_380723977_26.jpg',
									label:'小米'
								},
								{
									imageUrl:'http://img1.gtimg.com/digi/pics/hv1/3/154/1026/66754923.jpg',
									label:'华为'
								},
								{
									imageUrl:'http://article.fd.zol-img.com.cn/t_s640x2000/g2/M00/09/08/Cg-4WVUaQ7uIdBydAAI6FgQWUyYAAAmGQA2xAEAAjou108.jpg',
									label:'荣耀'
								},
								{
									imageUrl:'http://pic.3h3.com/up/2012-11/20121111331105116169.jpg',
									label:'苹果'
								},
							]
						});
						break;
						case '2':
						res.json({
							errno:0,
							data:[
								{
									imageUrl:'http://article.fd.zol-img.com.cn/t_s640x2000/g2/M00/09/08/Cg-4WVUaQ7uIdBydAAI6FgQWUyYAAAmGQA2xAEAAjou108.jpg',
									label:'荣耀'
								},
								{
									imageUrl:'http://article.fd.zol-img.com.cn/t_s640x2000/g2/M00/09/08/Cg-4WVUaQ7uIdBydAAI6FgQWUyYAAAmGQA2xAEAAjou108.jpg',
									label:'荣耀'
								},
								{
									imageUrl:'http://article.fd.zol-img.com.cn/t_s640x2000/g2/M00/09/08/Cg-4WVUaQ7uIdBydAAI6FgQWUyYAAAmGQA2xAEAAjou108.jpg',
									label:'荣耀'
								},
								{
									imageUrl:'http://article.fd.zol-img.com.cn/t_s640x2000/g2/M00/09/08/Cg-4WVUaQ7uIdBydAAI6FgQWUyYAAAmGQA2xAEAAjou108.jpg',
									label:'荣耀'
								},
							]
						})
						case '3':
						res.json({
							errno:0,
							data:[
								{
									imageUrl:'http://pic.3h3.com/up/2012-11/20121111331105116169.jpg',
									label:'苹果'
								},
								{
									imageUrl:'http://pic.3h3.com/up/2012-11/20121111331105116169.jpg',
									label:'苹果'
								},
								{
									imageUrl:'http://pic.3h3.com/up/2012-11/20121111331105116169.jpg',
									label:'苹果'
								},
								{
									imageUrl:'http://pic.3h3.com/up/2012-11/20121111331105116169.jpg',
									label:'苹果'
								},
							]
						})
						case '4':
						res.json({
							errno:0,
							data:[
								{
									imageUrl:'http://img1.gtimg.com/digi/pics/hv1/3/154/1026/66754923.jpg',
									label:'华为'
								},
								{
									imageUrl:'http://img1.gtimg.com/digi/pics/hv1/3/154/1026/66754923.jpg',
									label:'华为'
								},
								{
									imageUrl:'http://img1.gtimg.com/digi/pics/hv1/3/154/1026/66754923.jpg',
									label:'华为'
								},
								{
									imageUrl:'http://img1.gtimg.com/digi/pics/hv1/3/154/1026/66754923.jpg',
									label:'华为'
								},
							]
						})
					}
				})
			}
		},
		externals: {
			'AMap': 'AMap' // 高德地图配置
		}
	},

	css: {
		loaderOptions: {
			stylus: {
				'resolve url': true,
				'import': [
					'./src/theme'
				]
			}
		}
	},

	pluginOptions: {
		'cube-ui': {
			postCompile: true,
			theme: true
		}
	}
}
