const path = require("path");
const webpack = require("webpack");
const TerserJsPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsplugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    modules: ["firebase", "tiny-slider", "vue", "vue-router", "vuex"]
  },
  optimization: {
    minimizer: [new TerserJsPlugin(), new OptimizeCSSAssetsplugin()]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash].dll.js",
    library: "[name]"
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "[name]-manifest.json")
    })
  ]
};
