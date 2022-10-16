import * as yup from "yup";

import IsHKID from "../../../helpers/isHKID";

const FORM_VALIDATION = yup.object().shape({
  PID: yup
    .string()
    .test("is-HKID", "Not a valid HKID", (value) => IsHKID(value))
    .required("Required"),
  date: yup.string().typeError("Select a date").required("Required"),
  readyForRecord: yup.boolean(),
});

export default FORM_VALIDATION;
