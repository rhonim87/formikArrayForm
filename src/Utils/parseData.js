const handlePassengerFieldWithArrayForm = (passengers, validations) => {
  let parseValidation = {};
  Object.keys(validations).forEach((key) => {
    let validationObject = {};

    validations[key].forEach((validation) => {
      Object.keys(validation).forEach((vKey) => {
        if (vKey === "description") {
          validationObject[`${validation[vKey]}`] = "";
        }
      });
    });

    parseValidation[key] = validationObject;
  });

  const passengerWithValidation = passengers.map((passenger, idx) => {
    return {
      passengerSequence: idx,
      passengerType: passenger.id_passenger_type,
      room: passenger.sequence,
      ...(passenger.id_passenger_type !== 1
        ? parseValidation.required_baby
        : parseValidation.required_adult),
    };
  });

  return passengerWithValidation;
};

export default handlePassengerFieldWithArrayForm;
