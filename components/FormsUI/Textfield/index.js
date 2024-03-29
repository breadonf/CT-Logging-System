import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

const TextfieldWrapper = ({
  name,
  prepopulatedvalue,
  onKeyDown,
  ...otherProps
}) => {
  const [field, meta] = useField(name);
  const defaultOnKeyDown = (event) => {
    if (event.key === "Enter") {
      // Prevent's default 'Enter' behavior.
      event.defaultMuiPrevented = true;
      event.preventDefault();
      // your handler code
      // Temp fixes
      // For preventing pressing enter when in autocomplete to prevent inputting string value to the field without processing to array
    }
  };
  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "filled",
    onKeyDown: onKeyDown ?? defaultOnKeyDown,
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
    console.log(meta.error);
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
