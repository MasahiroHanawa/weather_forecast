const webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",

  entry: {
    js: "./js/index.js"
  },
  output: {
    path: __dirname + "/../public/dist",
    filename: "./js/app.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.DefinePlugin({
      API_URL: JSON.stringify("http://146.148.56.111"),
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
};