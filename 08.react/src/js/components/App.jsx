import React, { useState } from "react";
import data from "./data.json";
import Loader from "./Loader";

console.log(data);
function App() {
  const [loaderList, setLoaderList] = useState([]);

  //los loaders se mostraran solo si he presionado el boton que llama a este evento
  function handleClick() {
    setLoaderList(data.loaders);
  }
  return (
    <div>
      <ul>
        {loaderList.map(item => (
          //<Loader key={item.id} data={item} />
          //En vez de enviarle data le envio destructurado directamente
          <Loader key={item.id} {...item} />
        ))}
      </ul>
      <button onClick={handleClick}>
        Mostar lo aprendido hasta el momento
      </button>
    </div>
  );
}

export default App;
