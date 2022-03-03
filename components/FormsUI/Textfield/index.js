import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

const TextfieldWrapper = ({ name, ...otherProps }) => {
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
      sx={{
        input: { color: "#05668D" },
        label: { fontWeight: "bold", color: "#495371" },
      }}
    />
  );
};

export default TextfieldWrapper;
