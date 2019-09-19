const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src/js/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist/"), //obtiene la direccion root de nuestro proyecto y
    //guardara en dist/js
    filename: "js/bundle-[name].js" //[name] obtiene el nombre del entry para guardarlo con ese nombre
  },
  module: {
    rules: [
      {
        test: /\.css$/, //cualquier archivo que finalice con .css va a ser
        //interpretado por esta aexpresion regular
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"] //va en este orden
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Index-Plugins",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/bundle-[name].css"
    })
  ]
};
