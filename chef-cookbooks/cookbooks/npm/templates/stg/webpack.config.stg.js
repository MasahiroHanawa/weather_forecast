module.exports = {
  context: __dirname + "/src/www",

  entry: {
    jsx: "./jsx/app.jsx",
    css: "./css/style.css",
  },

  output: {
    path: __dirname + "/src/main/resources/static",
    filename: "./js/bundle.js",
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.css$/,
        loader: "file?name=[name].[ext]",
      },
    ]
  },

  devServer: {
    port: 18080,
    inline: true,
    contentBase: __dirname + "/src/main/resources/static",
  }
};