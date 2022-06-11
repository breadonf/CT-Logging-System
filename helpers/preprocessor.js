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

  const { height, weight, volume, ttp, rate, circumference, PID } = values;
  const convertedHeight = parseFloat(height);
  const convertedWeight = parseFloat(weight);
  const convertedCircumference = parseFloat(circumference);
  const convertedVolume = parseFloat(volume);
  const convertedTtp = parseFloat(ttp);
  const convertedRate = parseFloat(rate);
  const convertedPID = PID.toUpperCase();

  const modifiedValues = { ...values };

  modifiedValues.Date_func && delete modifiedValues.Date_func;

  modifiedValues.height = convertedHeight;
  modifiedValues.weight = convertedWeight;
  modifiedValues.volume = convertedVolume;
  modifiedValues.ttp = convertedTtp;
  modifiedValues.rate = convertedRate;
  modifiedValues.age = computedAge;
  modifiedValues.circumference = convertedCircumference;
  modifiedValues.PID = convertedPID;
  console.log(
    "Modified value use this for debugging in submission",
    modifiedValues
  );
  return modifiedValues;
};

export default preprocessor;
