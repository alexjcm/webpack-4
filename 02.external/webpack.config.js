const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./index.js"),
  output: {
    path: path.resolve(__dirname, "dist"), //obtiene la direccion root de nuestro proyecto y
    //guardara en dist
    filename: "bundle.js" //nombre de nuestro archivo final
  }
};
