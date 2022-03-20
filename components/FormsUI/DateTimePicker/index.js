import React from "react";
import { TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";
import DatePicker from "@mui/lab/DatePicker";
// const DateTimePicker = ({ name, prepopulatedValue, ...otherProps }) => {
//   const [field, meta] = useField(name);
//   const handledDate = prepopulatedValue.split("T")[0];
//   const configDateTimePicker = {
//     ...field,
//     ...otherProps,
//     type: "date",
//     variant: "filled",
//     fullWidth: true,
//     InputLabelProps: {
//       shrink: true,
//     },
//     defaultValue: handledDate,
//   };
//   if (meta && meta.touched && meta.error) {
//     configDateTimePicker.error = true;
//     configDateTimePicker.helperText = meta.error;
//   }

//   return <TextField {...configDateTimePicker} />;
// };

// export default DateTimePicker;
export default function DateTimePicker({
  name,
  prepopulatedValue,
  ...otherProps
}) {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const handledDate = prepopulatedValue?.split("T")[0];
  const handleChange = (value) => {
    console.log(value);
    setFieldValue(name, value);
  };
  const configDateTimePicker = {
    ...field,
    ...otherProps,

    variant: "filled",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };

  return (
    <DatePicker
      label="Exam Date"
      value={field.value}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          variant="filled"
          fullWidth
          sx={{
            input: { color: "#05668D" },
            label: { fontWeight: "bold", color: "#495371" },
          }}
          {...params}
        />
      )}
    />
  );
}
