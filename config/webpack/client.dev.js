require("dotenv").config();
const webpack = require("webpack");
const path = require("path");

const DEV_SERVER_BASE_PATH = `http://${process.env.DEV_SERVER_HOST}:${process.env.DEV_SERVER_PORT}`;

module.exports = {
  mode: process.env.NODE_ENV,

  entry: {
    app: [
      `webpack-dev-server/client?${DEV_SERVER_BASE_PATH}`,
      path.resolve("client/index.tsx")
    ]
  },

  output: {
    filename: "[name].js?v=[hash]",
    publicPath: `${DEV_SERVER_BASE_PATH}/dist/`
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [path.resolve(__dirname), "node_modules", "client"]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ],

  devtool: "inline-source-map",

  devServer: {
    host: process.env.DEV_SERVER_HOST,
    port: process.env.DEV_SERVER_PORT,
    historyApiFallback: true,
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {fix: true},
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'ts-loader'],
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
            loader: "css-loader"
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
            loader: "css-loader"
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
