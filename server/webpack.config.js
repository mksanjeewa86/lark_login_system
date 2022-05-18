const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

// 環境情報
const local = require('./src/environment/_local');
const staging = require('./src/environment/_staging');
const production = require('./src/environment/_production');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    server: './src/server.ts',
  },
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        exclude: /node_modules/,
        options: {
          emitErrors: true,
        },
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'cache-loader',
          },
          {
            loader: 'awesome-typescript-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  performance: {
    hints: false,
  }
};

/**
 * 本番サーバ
 */
if (process.env.NODE_ENV === 'production') {
  module.exports.mode = 'production';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': production.default,
    }),
  ]);
} else if (process.env.NODE_ENV === 'staging') {
  /**
   * ステージングサーバ
   */
  module.exports.mode = 'production';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': staging.default,
    }),
  ]);
} else if (process.env.NODE_ENV === 'local') {
  /**
   * ローカルサーバ
   */
  module.exports.mode = 'development';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': local.default,
    }),
  ]);
}
