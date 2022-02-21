import React from "react";
import { Autocomplete, TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

export default function AutocompleteWrapper({
  id,
  name,
  label,
  autocompleteOptions,
  ...otherProps
}) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e, value) => {
    let result = value.map((a) => a.name);
    setFieldValue(name, value !== null ? result : []);
  };
  const configAuto = {
    ...field,
    ...otherProps,
    variant: "filled",
    margin: "normal",
    label: label,
    fullWidth: true,
    name: name,
  };
  if (meta && meta.touched && meta.error) {
    configAuto.error = true;
    configAuto.helperText = meta.error;
  }

  return (
    <Autocomplete
      id={id}
      name={name}
      fullWidth
      options={autocompleteOptions}
      getOptionLabel={(option) => option.name}
      onChange={handleChange}
      renderInput={(params) => <TextField {...configAuto} {...params} />}
      {...otherProps}
    />
  );
}
