const INITIAL_FORM_STATE = {
  PID: "",
  age: "",
  date: new Date(),
  protocol: [],
  contrastRegime: "",
  studyDose: "",
  seriesDose: "",
  seriesCTDI: "",
  heartRate: { min: "", max: "", average: "", variance: "" },
  scanTechnique: "",
  breathingControl: "",
  depictionOfROI: "",
  satisfaction: null,
  artefact: "",
  remarks: "",
  delayTime: "",
};

export default INITIAL_FORM_STATE;
