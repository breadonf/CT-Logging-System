import * as yup from "yup";

export const InitialFormState = { weight: "", rate: "" };
export const ValidationSchema = yup.object().shape({
  rate: yup
    .number()
    .typeError("Please enter a number")
    .required("Required!")
    .min(0, "Invalid input")
    .max(10, "Impossible"),
  weight: yup
    .number()
    .typeError("Please enter a number")
    .required("Required!")
    .min(0, "Invalid input")
    .max(300, "Impossible"),
});
