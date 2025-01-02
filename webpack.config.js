const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, arg) => {
  return {
    mode: env.production ? 'production' : 'development',
    entry: './src/index.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    devtool: 'eval',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
    devServer: {
      static: './dist',
      port: 3000,
      hot: true,
      open: true,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  }
}
