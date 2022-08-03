import React from "react";
import { TextField } from "@mui/material";
import { FastField } from "formik";

const TextfieldWrapper = ({ name, ...otherProps }) => {
  const configTextfield = {
    ...otherProps,
    fullWidth: true,
    variant: "filled",
  };
  return (
    <FastField name={name}>
      {({ field, _form, meta }) => (
        <>
          <TextField
            {...field}
            {...configTextfield}
            sx={{
              input: { color: "#05668D" },
              label: { fontWeight: "bold", color: "#495371" },
            }}
          />
          {meta.touched ? meta.error : null}
        </>
      )}
    </FastField>
  );
};

export default TextfieldWrapper;
