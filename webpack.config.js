var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');	//插件的引用，commonjs模块引用的写法 

module.exports = {
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js',
		b: './src/script/b.js',
		c: './src/script/c.js',
	},
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'js/[name]-[chunkhash].js',		//js文件生成在js目录，其他文件生成在dist目录
		publicPath: 'http://cdn.com'		//上线地址
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'a.html',	//设置生成文件名
			template: 'index.html',		//以index.html为模板文件生成dist目录下的index.html
			inject: false,		//定义生成js的插入位置，head,body,false
			title: 'wepack is a',		//index.html模板可以取出这个值
			chunks: ['main','a']	//只引入指定文件
		}),
		new htmlWebpackPlugin({
			filename: 'b.html',	//设置生成文件名
			template: 'index.html',		//以index.html为模板文件生成dist目录下的index.html
			inject: false,		//定义生成js的插入位置，head,body,false
			title: 'wepack is b',		//index.html模板可以取出这个值
			excludeChunks: ['a','c']	//除了指定文件，其他js文件都引入
		}),
		new htmlWebpackPlugin({
			filename: 'c.html',	//设置生成文件名
			template: 'index.html',		//以index.html为模板文件生成dist目录下的index.html
			inject: false,		//定义生成js的插入位置，head,body,false
			title: 'wepack is c',		//index.html模板可以取出这个值
			chunks: ['main','c']
		})
	]
}