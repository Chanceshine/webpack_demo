var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');	//插件的引用，commonjs模块引用的写法 
var webpack = require('webpack');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'js/[name].bundle.js',		//js文件生成在js目录，其他文件生成在dist目录
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: path.resolve(__dirname,'node_modules'),
				include: path.resolve(__dirname,'src'),
				options:{
					'presets': ['env']
				}
			}
		],
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{ 
						loader:'css-loader',
						options: {
							importLoaders: 1,
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							config: {
								path: path.resolve(__dirname,'./postcss.config.js')
							}
						}		
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					{ 
						loader:'css-loader',
						options: {
							importLoaders: 1,
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							config: {
								path: path.resolve(__dirname,'./postcss.config.js')
							}
						}		
					},
					{
						loader: 'less-loader'
					}
				]	
			},
			{
				test: /\.html$/,
				use: ['html-loader'] 
			},
			{
				test: /\.tpl$/,
				use: ['ejs-loader']
			},
			{
				test: /\.(png|jpg|svg|gif)$/i,
				loaders: [
					'url-loader?limit=10000&name=asset/[name]-[hash:5].[ext]',
					'image-webpack-loader'
				]
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body'
		})
	]
}