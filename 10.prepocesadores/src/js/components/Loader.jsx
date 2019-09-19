import React from "react";

//estamos destructurando props para obtener solo name
function Loader({ name }) {
  return <li>{name}</li>;
}

export default Loader;
