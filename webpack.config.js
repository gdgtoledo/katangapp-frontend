var path = require('path');

var srcPath = path.join(__dirname, 'src');

module.exports = {
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'src/components/app/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
      preLoaders: [{
          test: /\.(js|jsx)$/,
          include: srcPath,
          loader: 'babel!eslint-loader'
        }],
      loaders: [
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader!postcss-loader'
        },
        {
          test: /\.sass/,
          loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax'
        },
        {
          test: /\.scss/,
          loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
        },
        {
          test: /\.(png|jpg|gif|woff|woff2)$/,
          loader: 'url-loader?limit=8192'
        }
      ]
    },
};
