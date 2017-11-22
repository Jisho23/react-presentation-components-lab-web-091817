import React from "react";
import ReactDOM from "react-dom";

import SimpleComponent from "./components/SimpleComponent";
import SimplerComponent from "./components/SimplerComponent";

function poke() {
  alert("ouch!");
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={poke} />
  </div>,
  document.getElementById("root")
);
