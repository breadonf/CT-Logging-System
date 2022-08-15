import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";
const TextfieldWrapper = ({ name, prepopulatedValue, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "filled",
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return (
    <TextField
      {...configTextfield}
      defaultValue={prepopulatedValue}
      sx={{
        input: { color: "#05668D" },
        label: { fontWeight: "bold", color: "#495371" },
      }}
    />
  );
};

export default TextfieldWrapper;
