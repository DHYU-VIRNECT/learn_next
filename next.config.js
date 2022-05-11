const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  compress: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
    });

    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: "@mdx-js/loader",
          options: {},
        },
      ],
    });

    config.module.rules.push({
      test: /\.tsx?$/,
      loader: "ts-loader",
    });

    config.plugins.push(new ForkTsCheckerWebpackPlugin());
    config.plugins.push(new MiniCssExtractPlugin());

    return config;
  },
  env: {
    secretKey: "secret-key",
  },
};
