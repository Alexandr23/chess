const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('../main');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  mode: process.env.NODE_ENV,

  entry: {
    app: path.resolve('src/client/index.tsx'),
    vendor: ['react', 'react-dom']
  },

  output: {
    path: path.resolve('dist/static'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname), 'node_modules', 'app', 'app/redux'],
    alias: {
      App: path.resolve('src/app'),
      Config: path.resolve('config')
    }
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css'
    }),
    new ManifestPlugin({
      fileName: path.resolve('dist', 'staticManifest.json'),
      publicPath: '',
      filter: fileDescriptor => !fileDescriptor.isModuleAsset
    }),
    new OptimizeCSSAssetsPlugin({ cssProcessorPluginOptions: { preset: ['default', { convertValues: false }] } }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.PROD_MODE': JSON.stringify(process.env.PROD_MODE)
    })
    // new BundleAnalyzerPlugin(),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /\.js?$/,
          chunks: 'all'
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              silent: true
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
              fallback: 'style-loader',
              publicPath: '/static/'
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.scss/,
        include: path.resolve('./src/app/styles'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              fallback: 'style-loader',
              publicPath: '/static/'
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.scss/,
        exclude: [/node_modules/, path.resolve('./src/app/styles')],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              fallback: 'style-loader',
              publicPath: '/static/'
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]__[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(ttf|eot|woff2?)(\?[a-z0-9]+)?$/,
        use: 'file-loader?name=font/[name]-[hash].[ext]'
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        use: ['url-loader?limit=5000&name=images/build/[name]-[hash].[ext]']
      }
    ]
  }
};
