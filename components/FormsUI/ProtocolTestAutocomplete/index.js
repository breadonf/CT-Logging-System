import React from "react";
import { Autocomplete, TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

const ProtocolTestAutocomplete = ({ name, protocolData, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  if (meta && meta.touched && meta.error) {
    Autocomplete.error = true;
    Autocomplete.helperText = meta.error;
  }

  return (
    <Autocomplete
      name="protocolTest"
      options={protocolData}
      fullWidth
      value={value}
      onChange={handleChange}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            {...field}
            {...otherProps}
            id="test"
            variant="filled"
            name="protocolTest"
            label="Protocol Test"
          />
        );
      }}
      getOptionLabel={(option) => option.protocol}
      renderOption={(props, option) => {
        return (
          <MenuItem key={option.id} value={option.protocol} {...props}>
            {option.protocol}
          </MenuItem>
        );
      }}
    ></Autocomplete>
  );
};

export default ProtocolTestAutocomplete;
