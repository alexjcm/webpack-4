const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    precios: path.resolve(__dirname, "src/js/precios.js"),
    contacto: path.resolve(__dirname, "src/js/contacto.js")
  },
  output: {
    path: path.resolve(__dirname, "dist", "js"), //obtiene la direccion root de nuestro proyecto y
    //guardara en dist/js
    filename: "bundle-[name].js" //[name] obtiene el nombre del entry para guardarlo con ese nombre
  }
};
