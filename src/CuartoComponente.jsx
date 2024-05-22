import React from "react";

function CuartoComponente(props) {
  return <div>
    <h1>Nombre:{props.nombre}</h1>
    <h1>Apellido:{props.apellido}</h1>
    <h1>Edad:{props.edad}</h1>
  </div>;
}

export default CuartoComponente;
