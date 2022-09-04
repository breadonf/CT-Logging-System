import * as yup from "yup";

import IsHKID from "../../../helpers/isHKID";

const FORM_VALIDATION = yup.object().shape({
  PID: yup
    .string()
    .test("is-HKID", "Not a valid HKID", (value) => IsHKID(value))
    .required("Required"),
  date: yup.string().typeError("Select a date").required("Required"),
  readyForRecord: yup.boolean(),
  protocol: yup
    .array()
    .typeError("Not an array")
    .when("readyForRecord", {
      is: true,
      then: (schema) =>
        schema
          .min(1, "Required")
          .max(
            2,
            "You can only choose 2 protocols, please submit another form if necessary"
          ),
    }),
});

export default FORM_VALIDATION;
