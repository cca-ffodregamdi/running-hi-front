const path = require('path');

module.exports = {
  entry: './src/App.js', 
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    alias: {
      '@theme': path.resolve(__dirname, '/src/Darkmode/theme/theme'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
};
