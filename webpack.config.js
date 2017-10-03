const path = require('path');

module.exports = {
  //input
  entry: ['babel-polyfill', './src/components'],

//output
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  //transformations
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: [
            ['transform-react-jsx'],
            ['transform-class-properties']
          ]
        }
      }
    ]
  },

  //sourcemaps
  devtool: 'source-map',

  //server
  devServer: {
    contentBase: path.join(__dirname, 'src', 'components'),
    compress: true,
    historyApiFallback: true
  }

}