/**
 *    Copyright 2016-today Software Craftmanship Toledo
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Webpack = require('webpack');

const APP_NAME = 'katanga'
const SRC_PATH = './src';
const OUTPUT_PATH = `${__dirname}/dist`;

module.exports = env => {

  const config = {
    entry: [ `${SRC_PATH}/app/app.jsx` ],
    module: {
      rules: [
        {
          exclude:  /node_modules/,
          loaders: [
            'babel-loader?sourceMap'
          ],
          test: /\.(js|jsx)$/
        },
        {
          loader: ExtractTextPlugin.extract([
            'css-loader',
            'sass-loader'
          ]),
          test: /\.scss$/
        },
        {
          test: /\.(png|jpg|gif|woff|woff2)$/,
          loader: 'url-loader?limit=8192'
        },
      ]
    },
    output: {
        filename: `${APP_NAME}.js`,
        path: OUTPUT_PATH
    },
    plugins: [
        new HtmlWebpackPlugin({
          inject: 'body',
          template: `${SRC_PATH}/index.html`
        }),
        new ExtractTextPlugin(`${APP_NAME}.css`),
        new CopyWebpackPlugin([
          { from: `${SRC_PATH}/manifest.json`, to: 'manifest.json' }
        ])
    ],
    node: {
      fs: "empty"
    }
  };

  if (env && env.dev) {
    config.entry.unshift('webpack-dev-server/client?http://localhost:8080/');
    config.plugins.unshift(new Webpack.HotModuleReplacementPlugin());
    config.devtool = 'source-map';
    config.devServer = {
      contentBase: './',
      hot: true
    };
  }

  return config;

};