import { useField, useFormikContext } from "formik";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import React from "react";
import { TextField } from "@mui/material";

export default function DateTimePicker({ name, ...otherProps }) {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const handleChange = (value) => {
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
  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
        {...field}
        orientation="landscape"
        inputFormat="dd/MM/yyyy"
        label="Exam Date"
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
            {...configDateTimePicker}
          />
        )}
      />
    </LocalizationProvider>
  );
}
