# webpack_demo
Learning the way

## webpack的安装和使用
`一个模块加载器、打包工具`
<p>1、下载、安装node.js</p>
<p>2、确保node安装好?</p>
命令: <pre>node -v</pre> <pre>npm -v</pre>
<hr>
<p>3、全局安装webpack命令环境</p>
<pre>npm install webpack -g</pre>
<hr>
<p>4、验证是否安装成功</p>
<pre>webpack --version</pre>
<hr>
<p>5、进入目录，初始化npm，生成package.json工程文件(包括需要依赖模块、库描述、版本、作者等信息)</p>
<pre>npm -init</pre>
<hr>
<p>6、安装本地webpack( 要先全局安装之后再本地安装 )</p>
<pre>npm install webpack -D</pre>
<hr>
## webpack2.5.1中css-loader和postcss-loader冲突的问题
css-loader中options中设置importLoaders: 1,会导致webpack找不到postcss-load配置
<br>
`解决办法`
-webpack.config.js
<pre>modules:{
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
	  }
  ]
}</pre>
* 在webpack.config.js同级目录下新建postcss.config.js
<pre>
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}
</pre>
