import React from "react";
import { Autocomplete, TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

export default function AutocompleteWrapper({
  id,
  name,
  label,
  autocompleteOptions,
  prepopulatedValue,
  ...otherProps
}) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e, value) => {
    let result = value.map((a) => a.name);
    console.log(result);
    setFieldValue(name, value !== null ? result : []);
    console.log("Autocomplete", value);
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
  let flattenedAutocompleteOptions = autocompleteOptions.map(
    ({ name }) => name
  );

  return (
    <Autocomplete
      id={id}
      name={name}
      fullWidth
      options={flattenedAutocompleteOptions}
      getOptionLabel={(option) => option}
      onChange={handleChange}
      defaultValue={prepopulatedValue}
      renderInput={(params) => <TextField {...configAuto} {...params} />}
      {...otherProps}
    />
  );
}
