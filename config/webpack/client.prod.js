const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: process.env.NODE_ENV,

  entry: {
    app: path.resolve("client/index.tsx"),
    vendor: ["react", "react-dom"]
  },

  output: {
    path: path.resolve("dist"),
    // filename: '[name].[hash].js',
    filename: "[name].js",
    publicPath: "/"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
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
    }),
    // new BundleAnalyzerPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              silent: true,
            }
          }
        ]
      },
      {
        test: /\.css/,
        include: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
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
