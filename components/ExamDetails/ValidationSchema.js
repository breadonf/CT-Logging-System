import * as yup from "yup";

function IsHKID(str) {
  var strValidChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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

const FORM_VALIDATION = yup.object().shape({
  PID: yup
    .string()
    .reuqired()
    .test("Is HKID?", "This is not a HKID", (value) => {
      console.log("patient", value);
      IsHKID(value);
    }),
  inPatient: yup.boolean(),
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

  date: yup.string().required("Required"),
  urgent: yup.boolean(),
  sedation: yup.boolean(),
  protocol: yup.array().min(1, "Required").max(2, "You can only choose 2 protocols, please submit another form if necessary"),
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
  ttp: yup.number().typeError("Please enter a valid ttp in s"),
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

  radiographers: yup.array().min(1, "Required"),
  radiologists: yup.array(),
  nurses: yup.array(),
  remark: yup.string(),
});

export default FORM_VALIDATION;
