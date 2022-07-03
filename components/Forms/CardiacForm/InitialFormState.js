const INITIAL_FORM_STATE = {
  PID: "",
  inPatient: false,
  age: "",
  weight: "",
  height: "",
  sedation: [],
  breathingControl: [],
  IVSite: [{ location: [], side: [], Diffusics: false }],
  targetHR: "",
  scanMode:{ HRDependent: "", Flash:""}
};

export default INITIAL_FORM_STATE;
