import * as yup from "yup";

function IsHKID(str) {
  var strValidChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (str !== undefined) {
    if (str.length < 8) {
      return false;
    }
    str = str.toUpperCase();
    var hkidPat = /^([A-Z]{1,2})([0-9]{6})([A0-9])$/;
    var matchArray = str.match(hkidPat);
    if (matchArray == null) {
      return false;
    }
    var charPart = matchArray[1];
    var numPart = matchArray[2];
    var checkDigit = matchArray[3];
    var checkSum = 0;
    if (charPart.length == 2) {
      checkSum += 9 * (10 + strValidChars.indexOf(charPart.charAt(0)));
      checkSum += 8 * (10 + strValidChars.indexOf(charPart.charAt(1)));
    } else {
      checkSum += 9 * 36;
      checkSum += 8 * (10 + strValidChars.indexOf(charPart));
    }

    for (var i = 0, j = 7; i < numPart.length; i++, j--) {
      checkSum += j * numPart.charAt(i);
    }
    var remaining = checkSum % 11;
    var verify = remaining == 0 ? 0 : 11 - remaining;
    return verify == checkDigit || (verify == 10 && checkDigit == "A");
  }
  return true;
}

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
  rate: yup.string().nullable(),
  delays: yup.array().of(yup.number().nullable()),
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
