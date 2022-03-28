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
  disabled = false,
  limit = 2,
  ...otherProps
}) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const [disableInput, setDisabledInput] = React.useState(false);
  const handleChange = (e, value) => {
    if (multiple) {
      const result = value.map((option) => option);
      if (result.length >= limit) {
        setDisabledInput(true);
      } else {
        setFieldValue(name, value !== null ? result : []);
      }
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
    error: false
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
      disabled={disableInput}
      id={id}
      filterSelectedOptions
      name={name}
      fullWidth
      groupBy={groupBy}
      options={flattenedAutocompleteOptions}
      getOptionLabel={(option) => option}
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
