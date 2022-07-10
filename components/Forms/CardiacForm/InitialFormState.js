const INITIAL_FORM_STATE = {
  PID: "",
  name: "",
  date: new Date(),
  radiologistInCharge: "",
  sedation: "",
  breathingControl: [],
  IVSite: [{ location: [], side: [], Diffusics: false }],
  targetHR: "",
  scanMode: {
    HRDependent: false,
    flash: "",
    ss: { status: false, range: [0, 0] },
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
