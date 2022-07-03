import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
} from "@mui/material";
import { useField, useFormikContext } from "formik";

const ToggleWrapper = ({ name, label, legend, checked, ...otherProps }) => {
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
    configCheckbox.error = true;
    configCheckbox.helperText = meta.error;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel
        sx={{ fontWeight: "bold", color: "#495371" }}
        component="legend"
      >
        {legend}
      </FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              sx={{ fontWeight: "bold", color: "#495371" }}
              {...configToggle}
            />
          }
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};

export default ToggleWrapper;
