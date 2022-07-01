import * as yup from "yup";
import IsHKID from "../../../helpers/isHKID";

const FORM_VALIDATION = yup.object().shape({
  PID: yup
    .string()
    .test("is-HKID", "Not a valid HKID", (value, context) => IsHKID(value))
    .required("Required"),
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
  Date: yup.string().required("Required"),
  protocol: yup
    .array()
    .typeError("Not an array")
    .min(1, "Required")
    .max(
      2,
      "You can only choose 2 protocols, please submit another form if necessary"
    ),
  kV_a: yup.array().typeError("Not an array").min(1, "Required").required(),
  kV_b: yup.array().typeError("Not an array"),
  radiographers: yup
    .array()
    .transform((currentValue) => {
      currentValue === "" ? (currentValue = []) : currentValue;
    })
    .typeError("Not an array"),
  radiologists: yup.array().typeError("Not an array"),
  nurses: yup.array().typeError("Not an array"),
  contrastType: yup.string().typeError("Please select type of contrast"),
  rate: yup.number().typeError("Not an number"),
  directPostContrast: yup
    .boolean()
    .nullable()
    .when("contrastType", {
      is: (contrastType) => {
        return contrastType !== undefined;
      },
      then: (schema) => schema.required("Required"),
    }),
});

export default FORM_VALIDATION;
