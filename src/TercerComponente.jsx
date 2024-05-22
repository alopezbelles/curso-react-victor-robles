import React from "react";
import PropTypes from "prop-types";
function TercerComponente({nombre = "Pepe", apellido, edad=33}) {

    // console.log(props);
  return (
    <div>
      <h2>Mi nombre es {nombre}</h2>
      <h2>Mi apellido es {apellido}</h2>
      <h2>Mi edad es {edad}</h2>
    </div>
  );
}

TercerComponente.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,
}

export default TercerComponente;
