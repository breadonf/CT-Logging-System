const preprocessor = (values) => {
  // const toDate = (dateStr) => {
  //   console.log("inside todate now", dateStr);
  //   const [year, month, day] = dateStr.split("-");
  //   console.log("inside todate now");
  //   return new Date(year, month - 1, day, 8);
  // };
  let re = /([0-9|.]{1,5})(M|D|m|d{0,1})/;

  let matchedGrp = values.age.toString().match(re);
  const computedAge = 0;
  if (matchedGrp && matchedGrp[2] == "") {
    computedAge = parseFloat(matchedGrp[1]);
    console.log("1", computedAge, matchedGrp[1]);
  } else if (matchedGrp && (matchedGrp[2] == "D") | (matchedGrp[2] == "d")) {
    computedAge = Math.round((parseFloat(matchedGrp[1]) / 365) * 1000) / 1000;
    console.log("2");
  } else if (matchedGrp && (matchedGrp[2] == "M") | (matchedGrp[2] == "m")) {
    computedAge = parseFloat(matchedGrp[1]) / 12;
    console.log("3");
  } else {
    computedAge = values.age;
    console.log("4");
  }

  const { height, weight, volume, ttp, rate, pitch, ctdi } = values;
  const convertedHeight = parseFloat(height);
  const convertedWeight = parseFloat(weight);
  const convertedVolume = parseFloat(volume);
  const convertedTtp = parseFloat(ttp);
  const convertedRate = parseFloat(rate);
  const convertedPitch = parseFloat(pitch);
  const convertedCtdi = parseFloat(ctdi);
  // console.log("inside preprocessor now", values.Date);
  // const convertedDate = toDate(values.Date);
  // console.log("inside preprocessor now");
  const modifiedValues = { ...values };
  // console.log("inside", modifiedValues);
  // delete modifiedValues.Date;

  console.log(modifiedValues?.count);
  modifiedValues.count && delete modifiedValues.count;

  modifiedValues.Date_func && delete modifiedValues.Date_func;

  // modifiedValues.Date = convertedDate;
  modifiedValues.height = convertedHeight;
  modifiedValues.weight = convertedWeight;
  modifiedValues.volume = convertedVolume;
  modifiedValues.ttp = convertedTtp;
  modifiedValues.rate = convertedRate;
  modifiedValues.age = computedAge;
  modifiedValues.pitch = convertedPitch;
  modifiedValues.ctdi = convertedCtdi;
  console.log("ending preprocessor now");
  return modifiedValues;
};

export default preprocessor;
