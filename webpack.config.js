const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => {
  const plugins = [
    new MiniCssExtractPlugin({filename: "css/[name].[hash].css"})
  ];

  const css = [
    MiniCssExtractPlugin.loader,
    "css-loader"
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root: __dirname})
    );

    css.push({
        loader: "clean-css-loader",
        options: {
            compatibility: "*",
            level: 2,
            inline: ["remote"]
        }
    });
  } else {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return {
    entry: {
      "home": path.resolve(__dirname, 'src/entries/home.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].[hash].js',
      publicPath: path.resolve(__dirname, 'dist')+"/",
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    devServer: {
      port: 9000,
    },
    module: {
      rules: [
        {
          // test: que tipo de archivo quiero reconocer,
          // use: que loader se va a encargar del archivo
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react', 'stage-2'],
            }
          },
        },
        {
          test: /\.css$/,
          use: css
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]',
            }
          }
        },
      ]
    },
    plugins
  }
}
