const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust the entry point if necessary
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-optional-chaining']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};
