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
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
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
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"]
      },
      {
        test: /\.(jpg|png|svg|gif|woff|eot|ttf|mp4|webm)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 900000 //90KB
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React",
      // filename: "index.html", //es conveniente no cambiarle de nombre al archivo
      template: path.resolve(__dirname, "index.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
