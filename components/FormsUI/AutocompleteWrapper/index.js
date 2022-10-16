import { Autocomplete, TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";

import React from "react";

export default function AutocompleteWrapper({
  id,
  name,
  label,
  autocompleteOptions,
  prepopulatedvalue,
  multiple,
  groupBy,
  sx,
  ...otherProps
}) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handleChange = (e, value) => {
    if (multiple) {
      const result = value?.map((option) => option);

      setFieldValue(name, value !== null ? result : []);
    } else {
      setFieldValue(name, value);
    }
  };

  const configAuto = {
    ...field,
    ...otherProps,
    variant: "filled",
    label: label,
    fullWidth: true,
    onKeyDown: (event) => {
      if (event.key === "Enter") {
        // Prevent's default 'Enter' behavior.
        event.defaultMuiPrevented = true;
        event.preventDefault();
        // your handler code
        // Temp fixes
        // For preventing pressing enter when in autocomplete to prevent inputting string value to the field without processing to array
      }
    },
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
        ...sx,
        alignItems: "center",
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
      onChange={handleChange}
      defaultValue={prepopulatedvalue}
      getOptionLabel={(option) => option ?? null}
      renderInput={(params) => <TextField {...configAuto} {...params} />}
      isOptionEqualToValue={(option, value) => {
        option == value;
      }}
      {...otherProps}
    />
  );
}
