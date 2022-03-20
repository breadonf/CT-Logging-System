import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useField, useFormikContext } from "formik";

const CheckboxWrapper = ({ name, label, legend, checked, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e) => {
    const { checked } = e.target;
    setFieldValue(name, checked);
  };

  const configCheckbox = {
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
            <Checkbox
              sx={{ fontWeight: "bold", color: "#495371" }}
              {...configCheckbox}
            />
          }
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxWrapper;
