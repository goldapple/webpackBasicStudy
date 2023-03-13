const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  let entryPath = env.mode === 'production' ? './public/index.js' : './index.js';
  return {
    mode: 'none',
    entry: entryPath,
    output: {
      filename: 'bundle1.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      port: 9000,
      proxy: {
        '/api': 'http://localhost:3000',
      },
      hot: true,
    },
    devtool: 'eval-source-map',
    plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
  };
};
