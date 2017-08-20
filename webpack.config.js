const path = require('path');

module.exports = {
  //input
  entry: './src/components',

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
            ['transform-react-jsx', {pragma: 'h'}]
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