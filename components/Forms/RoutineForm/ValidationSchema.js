import * as yup from "yup";

const FORM_VALIDATION = yup.object().shape({
  PID: yup.string().required("Required"),
  inPatient: yup.boolean(),
  age: yup.string().required("Required"),
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
  Date: yup.string().typeError("Required").required("Required"),
  urgent: yup.boolean(),
  sedation: yup.boolean(),
  protocol: yup.array().min(1, "Required"),
  kV_a: yup.lazy((val) =>
    Array.isArray(val)
      ? yup.array().typeError("Required").of(yup.string().typeError("Required"))
      : yup.string().typeError("Required")
  ),
  kV_b: yup.string().nullable(),
  pitch: yup
    .number()
    .required("Required")
    .typeError("Please enter a valid pitch")
    .min(0, "Invalid Input")
    .max(5),
  injectionSite: yup.string().nullable(),
  handInjection: yup.boolean().nullable(),
  mixedContrast: yup.boolean().nullable(),
  contrastType: yup.string().nullable(),
  rate: yup
    .number()
    .typeError("Please enter a valid rate")
    .min(0, "Invalid Input")
    .max(10)
    .nullable(),
  directPostContrast: yup.boolean().nullable(),
  volume: yup.number().typeError("Please enter a volume").nullable(),
  ttp: yup.number().typeError("Please enter a valid ttp in s").nullable(),
  radiographers: yup.array().nullable(),
  radiologists: yup.array().nullable(),
  examType: yup.array().nullable(),
  nurses: yup.array().nullable(),
  remark: yup.string().nullable(),
  keywords: yup.string().nullable(),
  delays: yup.array().nullable(),
  ctdi: yup.number().required("Required"),
});

export default FORM_VALIDATION;
