import { useState, useEffect } from "react";

// Componentes
import Formulario from "./componentes/Formulario";
import CardCita from "./componentes/CardCita";

function App() {
  //  A P L I C A C I Ó N
  let citasIniciales = JSON.parse(localStorage.getItem("citas")); //esta citas son obtenidas de local-storage

  if (!citasIniciales) {
    citasIniciales = []; // sino existen se les asigna un arr vacio este valor lo toma el state
  }
  const [CITAS, setCITAS] = useState(citasIniciales); // estado para CITAS

  useEffect(() => {
    // Use EFfect hara esta acción al detectar cambio en CITAS
    if (citasIniciales) {
      // si existe guardara las citas con el valor que tenga el state
      localStorage.setItem("citas", JSON.stringify(CITAS));
    } else {
      // sino existe guardara un arr vacio
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [CITAS]);

  function agregarCITA(cita) {
    setCITAS([...CITAS, cita]);
  }

  function eliminarCITA(idkey) {
    let nuevo = CITAS.filter((cita) => {
      return cita.id !== idkey;
    });
    setCITAS(nuevo);
  }

  return (
    <div className="App">
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="one-half column">
          <Formulario agregarCITA={agregarCITA} />
        </div>

        {/* -- */}

        <div className="one-half column">
          <div>
            {CITAS.length ? (
              <>
                <h2>Administa tus citas</h2>
              </>
            ) : (
              <h2>No hay citas</h2>
            )}

            {CITAS.map((cita) => {
              return (
                <CardCita
                  key={cita.id}
                  cita={cita}
                  eliminarCITA={eliminarCITA}
                />
              );
            })}
          </div>
        </div>

        {/* fin de .container  */}
      </div>
    </div>
  );
}

export default App;
