import React from "react";
import PropTypes from "prop-types";

const CardCita = ({ cita, eliminarCITA }) => {
  return (
    <div className="cita">
      <p>
        <span>Mascota:</span> {cita.mascota}
      </p>

      <p>
        <span>Propietario:</span> {cita.propietario}
      </p>
      <p>
        <span>Fecha:</span> {cita.fecha}
      </p>
      <p>
        <span>Hora:</span> {cita.hora}
      </p>
      <p>
        <span>Síntomas:</span> {cita.sintomas}
      </p>

      <button
        className="button eliminar u-full-width"
        onClick={() => {
          eliminarCITA(cita.id);
        }}
      >
        Eliminar &times;
      </button>
    </div>
  );
};

CardCita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCITA: PropTypes.func.isRequired,
};
export default CardCita;
