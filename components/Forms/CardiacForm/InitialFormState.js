const INITIAL_FORM_STATE = {
  PID: "",
  inPatient: false,
  age: "",
  weight: "",
  height: "",
  radiologistInCharge: "",
  sedation: [],
  breathingControl: [],
  IVSite: [{ location: [], side: [], Diffusics: false }],
  targetHR: "",
  scanMode: {
    HRDependent: "",
    Flash: "",
    ss: { status: false, range: ["", ""] },
    monitoringMethod: "",
    ROI: "",
  },

  phase: [
    {
      name: "Plain",
      scanRange: "",
      processing: { caScore: false },
      remark: "",
    },
    { name: [], scanRange: "", processing: [], remark: "" },
    { name: [], scanRange: "", processing: [], remark: "" },
    { name: [], scanRange: "", processing: [], remark: "" },
  ],
};

export default INITIAL_FORM_STATE;
