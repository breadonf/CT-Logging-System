const preprocessor = (values) => {
  const { PID, targetHR } = values;
  const convertedTargetHR = parseInt(targetHR);
  const convertedPID = PID.toUpperCase();

  const modifiedValues = { ...values };
  modifiedValues.targetHR = convertedTargetHR;
  modifiedValues.PID = convertedPID;

  console.log(
    "Cardiac Form: Modified value use this for debugging in submission",
    modifiedValues
  );
  return modifiedValues;
};

export default preprocessor;
