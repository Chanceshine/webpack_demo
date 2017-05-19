var path = require('path');

module.exports = {
	entry: ['./src/script/main.js','./src/script/a.js'],
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
	}
}