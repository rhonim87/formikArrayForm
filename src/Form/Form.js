import React, { useMemo } from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import handlePassengerFieldWithArrayForm from "../Utils/parseData";

const Form = (props) => {
  const { passengers, validations } = props;

  const passengerFields = useMemo(
    () => handlePassengerFieldWithArrayForm(passengers, validations),
    [passengers, validations]
  );

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      passangers: [...passengerFields],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <FieldArray
          name="passangers"
          render={() => (
            <div>
              {formik.values.passangers.map((fields, idx) => (
                <div key={idx}>
                  {Object.keys(fields).map((key) => {
                    if (
                      key === "passengerSequence" ||
                      key === "passengerType" ||
                      key === "room"
                    ) {
                      return null;
                    }
                    if (key === "País" || key === "Nacionalidad") {
                      return (
                        <div
                          key={`${idx}-${key}`}
                        >{`key === "País" || key ==="Nacionalidad"`}</div>
                      );
                    }

                    if (key === "Fecha de Nacimiento") {
                      return (
                        <div key={`${idx}-${key}`}>Fecha de Nacimiento</div>
                      );
                    }

                    return (
                      <TextField
                        key={`${idx}-${key}`}
                        label={key}
                        name={`passangers[${idx}][${key}]`}
                        value={formik.values.passangers[idx][key]}
                        onChange={formik.handleChange}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </FormikProvider>
  );
};

export default Form;
