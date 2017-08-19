const path = require('path');

module.exports = {
  //input
  entry: './src/components/app',

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
    contentBase: path.join(__dirname, 'src', 'components', 'app'),
    compress: true,
    historyApiFallback: true
  }

}