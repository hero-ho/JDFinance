const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = env => {
  if (!env) {
    env = {}
  }
  let plugins = [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ 
      template: './index.html',
      minify: {   // 压缩HTML代码
        collapseWhitespace: true, // 合并空白字符,成一行
        removeComments: true, // 移除HTML页面中的注释
        removeAttributeQuotes: true // 移除HTML标签属性中的引号
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ];
  if (env.production) {
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new ExtractTextPlugin("style.css", { ignoreOrder: true }),
      new UglifyJsPlugin({
        sourceMap: true
      })
    )
  }
  return {
    entry: {
      app: ['./src/common/js/hotcss.js', './src/main.js']
    },
    devtool: 'source-map',
    devServer: {
      contentBase: './dist',
      hot: true,
      compress: true,
      port: 9000,
      clientLogLevel: "none",
      quiet: true
    },
    module: {
      loaders: [
        {
          test: /\.html$/,
          loader: 'html-loader'
        }, {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            cssModules: {
              localIdentName: '[path][name]---[local]---[hash:base64:5]',
              camelCase: true
            },
            extractCSS: true,
            loaders: env.production ? {
              css: ExtractTextPlugin.extract({ use: 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8', fallback: 'vue-style-loader' }),
              scss: ExtractTextPlugin.extract({ use: 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8!sass-loader', fallback: 'vue-style-loader' })
            } : {
                css: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8',
                scss: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
              }
          }
        }, {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        }
      ]
    },
    resolve: {
      extensions: [
        '.js', '.vue', '.json'
      ],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    plugins,
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
};
