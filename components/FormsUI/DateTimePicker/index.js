import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";
import { imageConfigDefault } from "next/dist/server/image-config";

const DateTimePicker = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configDateTimePicker = {
    ...field,
    ...otherProps,
    type: "date",
    variant: "filled",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };

  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    imageConfigDefault.helperText = meta.error;
  }

  return <TextField {...configDateTimePicker} />;
};

export default DateTimePicker;
