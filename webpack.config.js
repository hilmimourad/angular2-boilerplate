var webpack = require('webpack');
var path = require('path');

const SOURCE_CODE_DIR = path.join(__dirname,'src');
const DIST_DIR = path.join(__dirname,'dist');
const APP_OUTPUT = 'app.bundle.js';
const SERVER_ROOT_DIR = path.join(__dirname,'dist');
const APP_ENTRY = './app/main.ts'


module.exports = {
	context: SOURCE_CODE_DIR,
	entry:APP_ENTRY,
	output:{
		path:path.join(DIST_DIR,'js'),
		filename:APP_OUTPUT
	},
	module:{
		loaders:[
			{test:/\.ts$/,loader:'ts'},
			{test:/\.pug$/,loader:'pug-html'},
			{test: /\.(png|jpg|gif)$/,loader:"file?name=/img/[name].[ext]"}
		]
	},
	resolve:{
		extensions:['','.js','.ts','.pug']
	},
	devServer:{
		contentBase:SERVER_ROOT_DIR,
		inline:true,
		stats:'errors-only'
	}
};