import * as yup from "yup";

const FORM_VALIDATION = yup.object().shape({
  PID: yup.string().required(),
  inPatient: yup.boolean(),
  age: yup.string().required(),
  weight: yup
    .number()
    .typeError("Please enter a valid weight in kg")
    .min(0, "Invalid Input"),
  height: yup
    .number()
    .typeError("Please enter a valid height in cm")
    .min(0, "Invalid Input"),
  circumference: yup
    .number()
    .typeError("Please enter a valid circumference in cm")
    .min(0, "Invalid Input")
    .nullable(),
  Date: yup.string().required("Required"),
  urgent: yup.boolean(),
  sedation: yup.boolean(),
  protocol: yup
    .array()
    .typeError("Not an array")
    .min(1, "Required")
    .max(
      2,
      "You can only choose 2 protocols, please submit another form if necessary"
    ),
  kV_A: yup.array().min(1, "Required").required(),
  kV_B: yup.array(),
  pitch: yup.string().required(),
  route: yup.string(),
  handInjection: yup.boolean(),
  mixedContrast: yup.boolean(),
  type: yup.string(),
  rate: yup
    .number()
    .typeError("Please enter a valid rate")
    .min(0, "Invalid Input")
    .max(10),
  volume: yup.number().typeError("Please enter a volume"),
  pre: yup.boolean(),
  ttp: yup.number().typeError("Please enter a valid ttp in s"),
  delays: yup.array(),
  radiographers: yup.array(),
  radiologists: yup.array(),
  nurses: yup.array(),
  remark: yup.string(),
  ctdi: yup.number().required(),
  IR: yup.boolean(),
});

export default FORM_VALIDATION;
