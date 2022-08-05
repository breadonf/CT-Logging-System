const preprocessor = (values) => {
  const {
    PID,
    targetHR,
    studyDose,
    seriesDose,
    seriesCTDI,
    delayTime,
  } = values;
  const convertedStudyDose = parseFloat(studyDose);
  const convertedSeriesDose = parseFloat(seriesDose);
  const convertedSeriesCTDI = parseFloat(seriesCTDI);
  const convertedDelayTime = parseFloat(delayTime);
  const convertedTargetHR = parseInt(targetHR);
  const convertedPID = PID.toUpperCase();

  const modifiedValues = { ...values };
  modifiedValues.targetHR = convertedTargetHR;
  modifiedValues.PID = convertedPID;
  modifiedValues.studyDose = convertedStudyDose;
  modifiedValues.seriesDose = convertedSeriesDose;
  modifiedValues.seriesCTDI = convertedSeriesCTDI;
  modifiedValues.delayTime = convertedDelayTime;
  console.log(
    "Cardiac Form: Modified value use this for debugging in submission",
    modifiedValues
  );
  return modifiedValues;
};

export default preprocessor;
