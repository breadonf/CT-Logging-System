import React from "react";
import { FormControl } from "@mui/material";
import { useField, useFormikContext } from "formik";
import { CheckboxWrapping } from "./CheckboxWrapping";
import { Label } from "./Label";

const CheckboxWrapper = ({
  name,
  label,
  legend,
  checked,
  dependable,
  checkedIcon,
  icon,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handleChange = (e) => {
    const { checked } = e.target;
    if (dependable) {
      setFieldValue(name, checked);
      dependable(checked);
      setFieldValue("sedationMethod", []);
      setFieldValue("sedatedBy", "");
    } else {
      setFieldValue(name, checked);
    }
  };

  const configCheckbox = {
    ...field,
    onChange: handleChange,
    checked: checked ? checked : field.value,
    checkedIcon: checkedIcon,
    icon: icon,
  };

  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configCheckbox.error = true;
    configCheckbox.helperText = meta.error;
  }

  return (
    <FormControl {...configFormControl}>
      <Label legend={legend}></Label>
      <CheckboxWrapping
        configCheckbox={configCheckbox}
        label={label}
      ></CheckboxWrapping>
    </FormControl>
  );
};

export default CheckboxWrapper;
