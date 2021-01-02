const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
var debug = process.env.NODE_ENV !== "production";

console.log('debug = ', debug)
const plugins = !debug ? [
  new webpack.optimize.UglifyJsPlugin({

    // Eliminate comments
       comments: false,

   // Compression specific options
      compress: {
        // remove warnings
           warnings: false,

        // Drop console statements
           drop_console: true
      },
   })
]
: []

const entry = {}
fs
  .readdirSync(path.resolve(__dirname, 'dist'))
  .filter(e => e.split('.')[1] === 'html')
  .map(i => {
    const fileName = i.split('.')[0]
    return {
      [fileName]: `./src/${fileName}.js`
    }
  }).forEach(i => {
    Object.assign(entry, i)
  })

const config = {
  entry,
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: '[name].bundle.js',
    publicPath: 'assets/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|webp)$/,
        use: "file-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins
};

module.exports = config;