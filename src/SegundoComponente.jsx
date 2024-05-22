import React from 'react';

function SegundoComponente () {
    const libros = ["Harry Potter", "El señor de los anillos", "La magia del orden"];
    return (
        <div>
            <ul>
                {libros.length >= 1? (
                    libros.map((libro, indice) => (
                        <li key={indice}>{libro}</li>
                    ))
                ) : (
                    <p>No hay libros</p>
                )}
            </ul>
        </div>
    );
};

export default SegundoComponente;