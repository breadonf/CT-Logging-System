const preprocessor = (values) => {
  const toDate = (dateStr) => {
    const [year, month, day] = dateStr.split("-");
    return new Date(year, month - 1, day, 8);
  };
  let re = /([0-9]{1,3})(M|D|m|d{0,1})/;
  let matchedGrp = values.age.toString().match(re);
  const computedAge = 0;
  if (matchedGrp && matchedGrp[2] == "") {
    computedAge = parseFloat(matchedGrp[1]);
  } else if (matchedGrp && (matchedGrp[2] == "D") | (matchedGrp[2] == "d")) {
    computedAge = Math.round((parseFloat(matchedGrp[1]) / 365) * 1000) / 1000;
  } else if (matchedGrp && (matchedGrp[2] == "M") | (matchedGrp[2] == "m")) {
    computedAge = parseFloat(matchedGrp[1]) / 12;
  }
  const { height, weight, volume, ttp, rate } = values;
  const convertedHeight = parseFloat(height);
  const convertedWeight = parseFloat(weight);
  const convertedVolume = parseFloat(volume);
  const convertedTtp = parseFloat(ttp);
  const convertedRate = parseFloat(rate);

  const convertedDate = toDate(values.Date);
  const modifiedValues = { ...values };
  delete modifiedValues.Date;
  delete modifiedValues.count;
  delete modifiedValues.Date_func;
  modifiedValues.Date = convertedDate;
  modifiedValues.height = convertedHeight;
  modifiedValues.weight = convertedWeight;
  modifiedValues.volume = convertedVolume;
  modifiedValues.ttp = convertedTtp;
  modifiedValues.rate = convertedRate;
  modifiedValues.age = computedAge;
  return modifiedValues;
};

export default preprocessor;
