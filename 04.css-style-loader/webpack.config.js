const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src/js/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist", "js"), //obtiene la direccion root de nuestro proyecto y
    //guardara en dist/js
    filename: "bundle-[name].js" //[name] obtiene el nombre del entry para guardarlo con ese nombre
  },
  module: {
    rules: [
      {
        test: /\.css$/, //cualquier archivo que finalice con .css va a ser
        //interpretado por esta aexpresion regular
        use: ["style-loader", "css-loader"] //va en este orden
      }
    ]
  }
};
