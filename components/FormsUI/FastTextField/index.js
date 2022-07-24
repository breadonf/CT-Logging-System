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
    <FastField name={name} placeholder="F">
      {({ field, _form, meta }) => (
        <>
          <TextField {...field} {...configTextfield} />
          {meta.touched ? meta.error : null}
        </>
      )}
    </FastField>
  );
};

export default TextfieldWrapper;
