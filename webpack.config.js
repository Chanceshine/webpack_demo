var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');	//插件的引用，commonjs模块引用的写法 

module.exports = {
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js'
	},
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'js/[name]-[hash].js'		//js文件生成在js目录，其他文件生成在dist目录
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index-[hash].html',	//设置生成文件名
			template: 'index.html',		//以index.html为模板文件生成dist目录下的index.html
			inject: 'head',		//定义生成js的插入位置，head,body,false
			title: 'wepack is good',		//index.html模板可以取出这个值
			date: new Date()
		})
	]
}