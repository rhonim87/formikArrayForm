import React from "react";
import Form from "./Form";

const passengers = [
  { id_passenger_type: 1, sequence: 1 },
  { id_passenger_type: 3, sequence: 1 },
  { id_passenger_type: 1, sequence: 2 },
];

const validations = {
  required_adult: [
    {
      optional: false,
      id_required_param: 3,
      description: "Nombre",
      order: 1,
    },
    {
      optional: false,
      id_required_param: 6,
      description: "Apellido",
      order: 3,
    },
    {
      optional: false,
      id_required_param: 11,
      description: "Número de Documento",
      order: 5,
    },
    {
      optional: false,
      id_required_param: 15,
      description: "País",
      order: 7,
    },
    {
      optional: false,
      id_required_param: 16,
      description: "Nacionalidad",
      order: 8,
    },
  ],
  required_baby: [
    {
      optional: false,
      id_required_param: 3,
      description: "Nombre",
      order: 1,
    },
    {
      optional: false,
      id_required_param: 6,
      description: "Apellido",
      order: 3,
    },
    {
      optional: false,
      id_required_param: 11,
      description: "Número de Documento",
      order: 5,
    },
    {
      optional: false,
      id_required_param: 1,
      description: "Fecha de Nacimiento",
      order: 6,
    },
    {
      optional: false,
      id_required_param: 15,
      description: "País",
      order: 7,
    },
    {
      optional: false,
      id_required_param: 16,
      description: "Nacionalidad",
      order: 8,
    },
  ],
};

function App() {
  return (
    <div className="App">
      <Form passengers={passengers} validations={validations} />
    </div>
  );
}

export default App;
