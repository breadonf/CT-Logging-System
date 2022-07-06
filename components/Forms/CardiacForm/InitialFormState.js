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
  scanMode: {
    HRDependent: "",
    Flash: "",
    ss: { status: false, range: ["", ""] },
  },
  phase: [
    { name: "Plain", scanRange: "", processing: { caScore: false } },
    { name: [], scanRange: "", processing: { caScore: false } },
    { name: [], scanRange: "", processing: { caScore: false } },
    { name: [], scanRange: "", processing: { caScore: false } },
  ],
};

export default INITIAL_FORM_STATE;
