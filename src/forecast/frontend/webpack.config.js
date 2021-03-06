const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + "/src",

  entry: {
    js: "./js/index.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "./js/app.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        filename: 'index.html',
        template: 'src/index.html'
      }
    ),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify("http://192.168.33.20"),
      APP_ID: JSON.stringify("e2d7ab339951cc3661b2432042fc64bd"),
      FORECAST_API_URL: JSON.stringify("http://api.openweathermap.org")
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: 'dist',
    inline: true,
    hot:true,
    port: 8081
  },
  watchOptions: {
    poll: true
  }
};