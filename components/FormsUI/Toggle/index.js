import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
  FormHelperText,
} from "@mui/material";
import { useField, useFormikContext } from "formik";

const ToggleWrapper = ({
  name,
  label,
  legend,
  checked,
  helperText,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e) => {
    const { checked } = e.target;
    setFieldValue(name, checked);
  };

  const configToggle = {
    ...field,
    onChange: handleChange,
    checked: checked ? checked : field.value,
  };

  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configToggle.error = true;
    configToggle.helperText = meta.error;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel
        component="legend"
        sx={{ fontWeight: "bold", color: "#495371" }}
      >
        {legend}
      </FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch {...configToggle} />}
          label={label}
          sx={{ fontWeight: "bold", color: "#495371" }}
          {...otherProps}
        />
      </FormGroup>
      <FormHelperText filled sx={{ fontSize: "large" }}>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
};

export default ToggleWrapper;
