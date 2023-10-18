const preprocessor = (values) => {
  const { PID, targetHR, studyDose, seriesDose, seriesCTDI } = values;
  const convertedStudyDose = parseFloat(studyDose);
  const convertedSeriesDose = parseFloat(seriesDose);
  const convertedSeriesCTDI = parseFloat(seriesCTDI);
  const convertedTargetHR = parseInt(targetHR);
  const convertedPID = PID.toUpperCase();

  const modifiedValues = { ...values };
  modifiedValues.targetHR = convertedTargetHR;
  modifiedValues.PID = convertedPID;
  modifiedValues.studyDose = convertedStudyDose;
  modifiedValues.seriesDose = convertedSeriesDose;
  modifiedValues.seriesCTDI = convertedSeriesCTDI;
  console.log(
    "Cardiac Form: Modified value use this for debugging in submission",
    modifiedValues
  );
  return modifiedValues;
};

export default preprocessor;
