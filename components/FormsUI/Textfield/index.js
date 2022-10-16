import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

const TextfieldWrapper = ({ name, prepopulatedvalue, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "filled",
    onKeyDown: (event) => {
      if (event.key === "Enter") {
        // Prevent's default 'Enter' behavior.
        event.defaultMuiPrevented = true;
        event.preventDefault();
        // your handler code
        // Temp fixes
        // For preventing pressing enter when in autocomplete to prevent inputting string value to the field without processing to array
      }
    },
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return (
    <TextField
      {...configTextfield}
      defaultValue={prepopulatedvalue}
      sx={{
        input: { color: "#05668D" },
        label: { fontWeight: "bold", color: "#495371" },
      }}
    />
  );
};

export default TextfieldWrapper;
