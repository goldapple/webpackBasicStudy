/** common에는 실행 모드에 관계 없이 항상 들어가야 하는 코드 */
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
};
