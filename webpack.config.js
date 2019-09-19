const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname), //obtiene la direccion root de nuestro proyecto
    filename: "bundle.js" //nombre de nuestro archivo final
  }
};
