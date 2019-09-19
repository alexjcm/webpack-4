import "../css/index.css";
import text from "./text.js";
import search from "./search.js";
import render from "./render.js";

const id = prompt("Quien es ese pokemon");

search(id)
  .then(data => {
    render(data);
  })
  .catch(() => {
    console.log("No hubo pokemon");
  });

text();

if (module.hot) {
  module.hot.accept("./text.js", function() {
    console.log("He recargado con HRM");
    text();
  });
}
