import React from 'react';

function MiComponente () {

    const nombre = "Alejandro";
    const usuario = {
        nombre: "Alejandro", 
        apellido: "Lopez",
        edad: 33, 

    }
    return (
        <div>
            <h1>Esto es mi componente</h1>
            <h3>Mi nombre es {nombre}</h3>
            <p>{JSON.stringify(usuario)}</p>
            <p>{usuario.edad}</p>
            <small><i>Esto es el pié de texto de mi componente.</i></small>

            
        </div>
    );
};

export default MiComponente;