const path = require('path');

module.exports = {
  entry: './src/App.js', // SVG 컴포넌트로 변환할 파일 경로로 수정

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};
