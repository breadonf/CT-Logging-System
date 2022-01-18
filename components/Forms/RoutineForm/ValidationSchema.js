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
    .typeError("Please enter a valid pitch")
    .min(0, "Invalid Input")
    .max(5),

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
  ttp: yup.number().typeError("Please entera valid ttp in s"),
  delay1: yup
    .number()
    .integer()
    .nullable()
    .typeError("Please enter a valid time in s"),
  delay2: yup
    .number()
    .integer()
    .nullable()
    .typeError("Please enter a valid time in s")
    .moreThan(yup.ref("delay1")),
  delay3: yup
    .number()
    .integer()
    .nullable()
    .moreThan(yup.ref("delay2"))
    .typeError("Please enter a valid time in s"),
  delay4: yup
    .number()
    .integer()
    .nullable()
    .typeError("Please enter a valid time in s")
    .moreThan(yup.ref("delay3")),

  pher: yup.string().required("Required"),
  gist: yup.string().required("Required"),
  nurse: yup.string(),

  remark: yup.string(),
});

export default FORM_VALIDATION;
