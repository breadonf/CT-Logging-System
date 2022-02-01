import React from "react";
import { Autocomplete, TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

export default function ProtocolAutocomplete({
  name,
  protocolData,
  ...otherProps
}) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e, value) => {
    setFieldValue("protocol", value !== null ? value.name : "");
  };

  if (meta && meta.touched && meta.error) {
    Autocomplete.error = true;
    Autocomplete.helperText = meta.error;
  }

  return (
    <Autocomplete
      id="protocol"
      name="protocol"
      fullWidth
      options={protocolData}
      getOptionLabel={(option) => option.name}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          variant="filled"
          margin="normal"
          label="Protocol"
          fullWidth
          name="protocol"
          {...params}
        />
      )}
    />
  );
}
