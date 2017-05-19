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
			template: 'index.html'	//以index.html为模板文件生成dist目录下的index.html
		})
	]
}