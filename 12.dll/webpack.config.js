const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "production",
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
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1 // se configura asi cuando se trabaje primero con postCSS
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "stylus-loader"
        ]
      },
      {
        test: /\.(jpg|png|svg|gif|woff|eot|ttf|mp4|webm)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000000 //90KB. Lo recomendado como maximo es 100KB
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css" //para partir mis archivos de manera optimizada cuando se repitan
    }),
    new HtmlWebpackPlugin({
      title: "React-Dll",
      filename: "index.html", //es conveniente no cambiarle de nombre al archivo
      template: path.resolve(__dirname, "index.html") //toma como base este index
      //(el cual no es el que está dist/ obviamente)  para crear el archivo anterior.
    }),
    new webpack.HotModuleReplacementPlugin(),

    //esto a a consumir el dll generado por el archivo webpack.dll.config
    new webpack.DllReferencePlugin({
      manifest: require("./modules-manifest.json") //el archivo que será cargado en la compilación
    })
  ]
};
