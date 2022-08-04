const preprocessor = (values) => {
  const { age, studyDose, seriesDose, seriesCTDI, delayTime } = values;
  const convertedAge = parseFloat(age);
  const convertedStudyDose = parseFloat(studyDose);
  const convertedSeriesDose = parseFloat(seriesDose);
  const convertedSeriesCTDI = parseFloat(seriesCTDI);
  const convertedDelayTime = parseFloat(delayTime);
  const modifiedValues = { ...values };
  modifiedValues.age = convertedAge;
  modifiedValues.studyDose = convertedStudyDose;
  modifiedValues.seriesDose = convertedSeriesDose;
  modifiedValues.seriesCTDI = convertedSeriesCTDI;
  modifiedValues.delayTime = convertedDelayTime;
  console.log(
    "Cardiac Case Record: Modified value use this for debugging in submission",
    modifiedValues
  );
  return modifiedValues;
};

export default preprocessor;
