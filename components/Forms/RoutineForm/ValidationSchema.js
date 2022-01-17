import * as yup from "yup";

const FORM_VALIDATION = yup.object().shape({
  PID: yup.string().required("Required"),
  inPatient: yup.boolean().required("Required"),
  age: yup
    .number()
    .required("Required")
    .typeError("Please enter a valid age")
    .min(0, "Invalid Input")
    .max(100),
  height: yup
    .number()
    .typeError("Please enter a valid height")
    .min(0, "Invalid Input"),
  weight: yup
    .number()
    .typeError("Please enter a valid weight")
    .min(0, "Invalid Input"),
  circumference: yup
    .number()
    .typeError("Please enter a valid weight")
    .min(0, "Invalid Input"),

  date: yup.date().required("Required"),
  urgent: yup.boolean(),
  sedation: yup.boolean(),
  protocol: yup.string().required("Required"),
  kV_A: yup.string().required("Required"),
  kV_B: yup.string(),
  pitch: yup
    .number()
    .required("Required")
    .typeError("Please enter a valid pitch"),

  route: yup.string().required("Required"),
  inPatient: yup.boolean(),
  mixedContrast: yup.boolean(),
  type: yup.string().required("Required"),
  rate: yup.number().typeError("Please enter a valid rate"),
  volume: yup.number().typeError("Please enter a volume"),
  pre: yup.boolean(),
  delay1: yup.number().typeError("Please enter a valid time in seconds"),
  delay2: yup.number().typeError("Please enter a valid time in seconds"),
  delay3: yup.number().typeError("Please enter a valid time in seconds"),
  delay4: yup.number().typeError("Please enter a valid time in seconds"),

  pher: yup.string().required("Required"),
  gist: yup.string().required("Required"),
  nurse: yup.string(),

  remark: yup.string(),
});

export default FORM_VALIDATION;
