const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const TerserPlugin = require("terser-webpack-plugin");
const { exec } = require('child_process');

function copyPublicToDist() {
  const dist = path.join(__dirname, 'dist'),
    src = path.join(__dirname, 'public')
console.log(dist,src)
  fs.rmdirSync(path.join(__dirname, 'dist'), { recursive: true })
  fs.mkdirSync(path.join(__dirname, 'dist'))
  exec(`cp -r ${src}/* ${dist}/`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}

module.exports = env => {
  copyPublicToDist();

  var debug = env.NODE_ENV !== "production";
  debug = true;
  console.log('debug = ', debug)

  const optimization = !debug ? {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        compress: { pure_funcs: ['console.info', 'console.debug', 'console.warn'] }
      })
    ],
  } : {}

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
    optimization
  };

  return config
};