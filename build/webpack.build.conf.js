const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config");
const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  plugins: [],
  /*module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: `${PATHS.src}/assets/js/postcss.config.js` },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: `${PATHS.src}/assets/js/postcss.config.js` },
            },
          },
        ],
      },
    ],
  },*/
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
