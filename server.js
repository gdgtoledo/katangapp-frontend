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

var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var serveStatic = require('serve-static')
var config = require('./webpack.config')

var compiler = webpack(config)
var port = 8080
var hostname = 'localhost'
var publicSrvPath = '/'
    
config.entry.app = config.entry.app.replace(/^/, 'webpack-dev-server/client?http://localhost:8080/')

var srv = new WebpackDevServer(compiler, {
    compress: true,
    colors: true,
    devtool: true,
    hot: true,
    publicPath: publicSrvPath,
    historyApiFallback: {
        verbose: true,
        index: publicSrvPath
    },
    setup: function (app) {
        app.use(publicSrvPath + 'assets', serveStatic(__dirname + '/src/app/assets/'))
        app.use(publicSrvPath + 'assets/icons', serveStatic(__dirname + '/src/app/assets/icons'))
        app.use(publicSrvPath + 'assets/images', serveStatic(__dirname + '/src/app/assets/images'))
    }
})

srv.listen(port, hostname)

process.stdout.write('http://' + hostname + ':' + port + '\n')
