const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

// 環境情報
const local = require('./src/environment/_local');
const staging = require('./src/environment/_staging');
const production = require('./src/environment/_production');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 5001,
    publicPath: '/',
    historyApiFallback: true,
    disableHostCheck: true,
  },
  module: {
    rules: [{
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
        use: [{
            loader: 'cache-loader',
          },
          {
            loader: 'awesome-typescript-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            minimize: true
          }
        }],
      },
      {
        test: /.scss?$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              data: "@import 'global-imports.scss';",
              includePaths: [path.resolve(__dirname, 'src/styles/')],
            },
          },
        ],
        exclude: /node_modules/,
      },{
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.svg$/,
        use: ['svg-url-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.png'],
  },
  performance: {
    hints: false,
  },
  plugins: [new CopyWebpackPlugin([{
    from: 'src/index.html'
  }, {
    from: 'src/403.html'
  }, {
    from: 'src/favicon.ico'
  }, {
    from: 'src/images/',
    to: 'images'
  }]), new cleanWebpackPlugin()],
};

if (process.env.NODE_ENV === 'production') {
  module.exports.mode = 'production';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': production.default,
    }),
  ]);
} else if (process.env.NODE_ENV === 'staging') {
  module.exports.mode = 'production';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': staging.default,
    }),
  ]);
} else if (process.env.NODE_ENV === 'local') {
  module.exports.mode = 'development';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': local.default,
    }),
  ]);
}
