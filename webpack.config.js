var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');	//插件的引用，commonjs模块引用的写法 

module.exports = {
	entry: 'src/app.js',
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'js/[name].bundle.js',		//js文件生成在js目录，其他文件生成在dist目录
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body'
		})
	]
}