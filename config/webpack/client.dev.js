const webpack = require("webpack");
const path = require("path");
const config = require("../main");

module.exports = {
  mode: process.env.NODE_ENV,

  entry: {
    app: [
      "webpack-dev-server/client?" + config.STATIC_URL,
      path.resolve("client/index.js")
    ]
  },

  output: {
    filename: "[name].js?v=[hash]",
    publicPath: config.STATIC_URL + "/dist/"
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname), 'node_modules', 'client'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    })
  ],

  devtool: "inline-source-map",

  devServer: {
    host: config.HOST,
    port: +config.PORT + 1,
    historyApiFallback: true,
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /node_modules/,
        use: ['react-hot-loader/webpack']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss/,
        include: path.resolve("./client/styles"),
        use: [
          "style-loader",
          {
            loader: "css-loader",
            // options: {
            //   modules: true
            // }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.scss/,
        exclude: [/node_modules/, path.resolve("./client/styles")],
        use: [
          "style-loader",
          {
            loader: "css-loader",
            // options: {
            //   modules: true,
            //   localIdentName: "[local]__[hash:base64:5]"
            // }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        use: ["url-loader?limit=5000&name=images/build/[name].[ext]"]
      }
    ]
  }
};
