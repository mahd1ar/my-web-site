const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const TerserPlugin = require("terser-webpack-plugin");
const { exec } = require('child_process');

function copyPublicToDist(isDebug) {
  const dist = path.join(__dirname, 'dist'),
    src = path.join(__dirname, 'public')

  fs.rmdirSync(path.join(__dirname, 'dist'), { recursive: true });
  fs.mkdirSync(path.join(__dirname, 'dist'));


  const command = `cp -${isDebug?'sR':'r'} ${src}/* ${dist}/`
console.log(command)
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}

module.exports = env => {
  
  var debug = env.NODE_ENV !== "production";
  console.log('debug = ', debug)
  
  copyPublicToDist(debug);
  debug = true

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
    .readdirSync(path.resolve(__dirname, 'public'))
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