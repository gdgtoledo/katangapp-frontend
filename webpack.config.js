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

var autoprefixer = require('autoprefixer'),
    csswring = require('csswring'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack'),
    WebpackShellPlugin = require('webpack-shell-plugin');

var PRODUCTION = process.env.NODE_ENV === 'production';

var srcPath = './src/',
    outputPath = './dist/',
    publicPath = '';

var files = {
    app: '[name].js',
    styles: '[name].css'
};

var onBuildStart = [
  'mkdir -p ' + outputPath,
  'cp ' + srcPath + 'index.html ' + outputPath
];

if (PRODUCTION) {
  files.app = '[name].[chunkhash].js';
  files.styles = '[name].[hash].css';
  //onBuildStart.push('mkdir -p ' + outputPath + 'assets/');
  //onBuildStart.push('cp -rf ' + srcPath + 'assets/ ' + outputPath + 'assets/');
}

var config= {
  context: __dirname,
  entry: {
    app: __dirname + '/src/app/app.jsx',
    styles: __dirname + '/src/app/app.scss'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'html', 'css']
  },
  output: {
      path: __dirname + '/dist',
      filename: files.app,
      publicPath: publicPath
  },
  module: {
    preLoaders: [{
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'babel!eslint-loader'
      }],
    loaders: [
      {
        test: /\.html$/,
        loader: 'html',
        exclude: [/node_modules/, /index\.html/]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      // {
      //   test: /\.scss/,
      //   loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
      // },
      {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css?sourceMap!postcss-loader?sourceMap!sass?sourceMap')
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new WebpackShellPlugin({
      onBuildStart: onBuildStart,
      verbose: true
    }),
    new ExtractTextPlugin(files.styles)
  ],
  sassLoader: {
        includePaths: [
            './node_modules/breakpoint-sass/stylesheets/'
        ]
  },
  postcss: function () {
        var plugins = [
            autoprefixer({browsers: ['last 2 Safari versions', 'last 2 versions']}),
            csswring
        ];
        return plugins;
  },
  devtool: 'source-map'
};

if (PRODUCTION) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
}

module.exports = config;