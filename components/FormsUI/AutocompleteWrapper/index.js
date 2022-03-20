import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { Autocomplete } from "@mui/material";
import { useField, useFormikContext } from "formik";

export default function AutocompleteWrapper({
  id,
  name,
  label,
  autocompleteOptions,
  prepopulatedValue,
  multiple,
  ...otherProps
}) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e, value) => {
    const result = value.map((option) => option);
    setFieldValue(name, value !== null ? result : []);
  };
  const configAuto = {
    ...field,
    ...otherProps,
    variant: "filled",
    margin: "normal",
    label: label,
    fullWidth: true,
    error: false,
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
      sx={{
        input: { color: "#05668D" },
        label: { fontWeight: "bold", color: "#495371" },
      }}
      multiple={multiple}
      id={id}
      name={name}
      fullWidth
      options={flattenedAutocompleteOptions}
      getOptionLabel={(option) => option}
      onChange={handleChange}
      defaultValue={prepopulatedValue}
      isOptionEqualToValue={(option, val) => {
        option === val;
      }}
      renderInput={(params) => <TextField {...configAuto} {...params} />}
      {...otherProps}
    />
  );
}
