import React from "react";

function EventoClick() {
  const mensaje = (e, nombre) => {
    alert("Has dado click al botón, " + nombre);
  };
  const mensajeDobleClick = (e, nombre) => {
    alert("Has dado doble click al botón, " + nombre);
  };

  return (
    <div>
      <h1>Eventos en React</h1>
      {/* Evento click */}
      <button onClick={(e)=>mensaje(e, "Alejandro")}>Dame click</button>
      {/* Evento doble click */}
      <button onDoubleClick={(e)=>mensaje(e, "Alejandro")}>Dame click</button>
      {/* On mouse enter */}
      <h1 onMouseEnter={()=>{
        console.log("Has entrado en el h1")
      }}>On Mouse Enter</h1>

    </div>
  );
}

export default EventoClick;
