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
    { name: [], scanRange: "", processing: [] },
    { name: [], scanRange: "", processing: [] },
    { name: [], scanRange: "", processing: [] },
  ],
};

export default INITIAL_FORM_STATE;
