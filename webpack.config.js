/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-07-31 18:55:02
 * @version $Id$
 */
var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var htmlPlugin = new HtmlWebpackPlugin({
	template: './src/template/a.html',
	title: '中原A+移动端',
	filename: 'index.html',
	inject: 'body'
});
module.exports = {
	plugins: [htmlPlugin, new ExtractTextPlugin('css/[name].css'), new webpack.LoaderOptionsPlugin({
		debug: true
	})],
	entry: {
		vendor: ['react', 'react-dom', 'react-router'],
		main: './src/router.js'
	},
	output: {
		path: path.join(__dirname, '/dist/'),
		publicPath: '/',
		chunkFilename: 'js/[name].chunk.js',
		filename: 'js/[name].bundle.js'
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /\.jsx$/,
			loader: 'jsx?harmony&name=js/[name].[ext]'
		}, {
			test: /\.scss$/,
			loader: 'style-loader!css-loader!scss-loader?sourceMap'
		}, {
			test: /\.less$/,
			loader: "style-loader!css-loader!less-loader?sourceMap&name=less/[name].[ext]"
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'url-loader?limit=8192&name=images/[name].[ext]'
		}, {
			test: /\.(woff2|woff|ttf|eot|svg|otf)$/,
			loader: 'url-loader?limit=100&name=css/font/[name].[ext]'
		}]
	},
	resolve: {
		extensions: ['.js', '.scss', '.json', '.jsx'],
		alias: {}
	},
	devServer: {
		proxy: {
			'/api/*': {
				"host": "localhost",
				"port": 8080,
				"secure": false
			}
		},
		historyApiFallback: true
	}
}
