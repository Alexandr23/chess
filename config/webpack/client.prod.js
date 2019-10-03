const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const config = require("../main");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,

  entry: {
    app: path.resolve("client/index.js"),
    vendor: ["react", "react-dom"]
  },

  output: {
    path: path.resolve("dist"),
    // filename: '[name].[hash].js',
    filename: "[name].js",
    publicPath: "/"
  },

  resolve: {
    extensions: [".js", ".jsx"]
    // modules: [path.resolve(__dirname), 'node_modules', 'app', 'app/redux'],
    // alias: {
    //   Config: path.resolve('config')
    // }
  },

  plugins: [
    new MiniCssExtractPlugin({
      // filename: 'styles.[hash].css'
      filename: "styles.css"
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ["default", { convertValues: false }]
      }
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ],

  // optimization: {
  //  splitChunks: {
  //    cacheGroups: {
  //      vendor: {
  //        name: "vendor",
  //        test: /\.js?$/,
  //        chunks: "all"
  //      }
  //    }
  //  }
  //},

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css/,
        include: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              fallback: "style-loader",
              publicPath: "/"
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.scss/,
        include: path.resolve("./src/app/styles"),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              fallback: "style-loader",
              publicPath: "/"
            }
          },
          {
            loader: "css-loader",
            options: {
              // modules: true
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.scss/,
        exclude: [/node_modules/, path.resolve("./src/app/styles")],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              fallback: "style-loader",
              publicPath: "/"
            }
          },
          {
            loader: "css-loader",
            options: {
              // modules: true,
              // localIdentName: '[local]__[hash:base64:5]'
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(ttf|eot|woff2?)(\?[a-z0-9]+)?$/,
        use: "file-loader?name=font/[name]-[hash].[ext]"
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        use: ["url-loader?limit=5000&name=images/build/[name]-[hash].[ext]"]
      }
    ]
  }
};
