const webpack = require('webpack');

const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || "development";

module.exports = {
  entry: {
    app: [
      './src/js/main.js',
      './src/scss/main.scss'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        // use: [
        //   MiniCssExtractPlugin.loader,
        //   'css-loader',
        //   'postcss-loader',
        //   'sass-loader'
        // ],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { url: false}
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },

      {
        test: /\.jpg$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      }
    ]
  },

  plugins: [

    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })

  ],

  mode: mode
};