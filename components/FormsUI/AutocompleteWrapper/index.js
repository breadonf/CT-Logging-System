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
  groupBy,
  limit = 2,
  ...otherProps
}) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handleChange = (e, value) => {
    if (multiple) {
      const result = value.map((option) => option);
      setFieldValue(name, value !== null ? result : []);
    } else {
      setFieldValue(name, value);
    }
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
    ({ label }) => label
  );
  return (
    <Autocomplete
      sx={{
        input: { color: "#05668D" },
        label: { fontWeight: "bold", color: "#495371" },
      }}
      multiple={multiple}
      id={id}
      filterSelectedOptions
      name={name}
      fullWidth
      groupBy={groupBy}
      options={flattenedAutocompleteOptions}
      getOptionLabel={(option) => (option ? option : "")}
      onChange={handleChange}
      defaultValue={prepopulatedValue}
      renderInput={(params) => (
        <TextField
          sx={{
            alignSelf: "flex-start",
          }}
          {...configAuto}
          {...params}
        />
      )}
      isOptionEqualToValue={(option, valu) => {
        option == valu;
      }}
      {...otherProps}
    />
  );
}
