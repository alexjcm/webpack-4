const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

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
  devServer: {
    hot: true, //Activa el HRM
    open: true, //abre un tab en el navegador con el localhost correspondiente
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/, //cualquier archivo que finalice con .css va a ser
        //interpretado por esta aexpresion regular
        use: ["style-loader", "css-loader"] //va en este orden
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Babel",
      filename: "index.html" //es conveniente no cambiarle de nombre al archivo
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
