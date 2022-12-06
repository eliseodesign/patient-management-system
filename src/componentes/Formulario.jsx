import React, { useState, useEffect } from "react";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";

const Formulario = ({ agregarCITA }) => {
  // SEAT ALERT
  const MySwal = withReactContent(Swal);

  //////////////////
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  function actualizarCita(e) {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  }

  // extraer valores

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // submit

  const submitCita = (e) => {
    e.preventDefault();
    // validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      MySwal.fire({
        confirmButtonText: "Aceptar",
        icon: "error",
        html: (
          <p
            style={{
              color: "#F8B4B9",
              fontFamily: "sans-serif",
              fontSize: "2em ",
              fontWeight: "bold",
            }}
          >
            Todos los campos son necesarios
          </p>
        ),
      });
      return;
    }

    // id

    cita.id = uuid();
    console.log(cita);
    // crear citar

    agregarCITA(cita);
    // reiniciar

    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <>
      <h2>Crear Cita</h2>
      <form onSubmit={submitCita}>
        {/* <label for="">Nombre Mascota</label> */}
        <input
          value={cita.mascota}
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarCita}
        />

        {/* <label for="">Nombre Del Dueño</label> */}
        <input
          value={cita.propietario}
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueño"
          onChange={actualizarCita}
        />

        {/* <label for="">Fecha</label> */}
        <input
          value={cita.fecha}
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarCita}
        />

        {/* <label for="">Hora</label> */}
        <input
          value={cita.hora}
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarCita}
        />

        {/* <label for="">Síntomas</label> */}

        <textarea
          value={cita.sintomas}
          placeholder="Síntomas"
          name="sintomas"
          className="u-full-width"
          cols="30"
          rows="10"
          onChange={actualizarCita}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </>
  );
};

Formulario.propTypes = {
  agregarCITA: PropTypes.func.isRequired,
};

export default Formulario;
