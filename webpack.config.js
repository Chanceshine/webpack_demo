var path = require('path');

module.exports = {
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js'
	},
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name]-[hash].js'
	}
}