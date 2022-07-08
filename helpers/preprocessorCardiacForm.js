const preprocessor = (values) => {
  // Age computing as written on form
  let re = /([0-9|.]{1,5})(M|D|m|d|Y|y{0,1})/;
  let matchedGrp = values.age.toString().match(re);
  const computedAge = 0;
  if (matchedGrp && matchedGrp[2] == "") {
    computedAge = parseFloat(matchedGrp[1]);
  } else if (matchedGrp && (matchedGrp[2] == "D") | (matchedGrp[2] == "d")) {
    computedAge = Math.round((parseFloat(matchedGrp[1]) / 365) * 1000) / 1000;
  } else if (matchedGrp && (matchedGrp[2] == "M") | (matchedGrp[2] == "m")) {
    computedAge = parseFloat(matchedGrp[1]) / 12;
  } else if (matchedGrp && (matchedGrp[2] == "Y") | (matchedGrp[2] == "y")) {
    computedAge = parseFloat(matchedGrp[1]);
  } else {
    computedAge = values.age;
  }
  const { PID, targetHR, weight, height } = values;
  const convertedHeight = parseFloat(height);
  const convertedWeight = parseFloat(weight);
  const convertedTargetHR = parseInt(targetHR);
  const convertedPID = PID.toUpperCase();

  const modifiedValues = { ...values };

  modifiedValues.Date_func && delete modifiedValues.Date_func;

  modifiedValues.height = convertedHeight;
  modifiedValues.weight = convertedWeight;
  modifiedValues.age = computedAge;
  modifiedValues.targetHR = convertedTargetHR
  modifiedValues.PID = convertedPID;
  console.log(
    "Cardiac Form: Modified value use this for debugging in submission",
    modifiedValues
  );
  return modifiedValues;
};

export default preprocessor;
