const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './client/',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'client'),
        query: {
          presets: [
            'es2015',
            'stage-0',
            'react',
          ],
        },
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'client'),
        loaders: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader',
        ],
      },
    ],
  },
  devtool: 'source-map',
};
