import React from "react";
import { Slider, FormControl, InputLabel } from "@mui/material";
import { useField, useFormikContext } from "formik";

const SlideWrapper = ({
  name,
  options,
  multiple,
  label,
  prepopulatedValue,
  sx,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const configSlider = {
    ...field,
    ...otherProps,
    select: true,
    variant: "filled",
    fullWidth: true,
    onChange: handleChange,
    SelectProps: {
      multiple: multiple,
    },
    defaultValue: field.value ? field.value : [],
    label: label,
  };
  if (meta && meta.touched && meta.error) {
    configSlider.error = true;
    configSlider.helperText = meta.error;
  }
  return (
    <FormControl fullWidth>
      <InputLabel disabled component="label" id={`label-${label}`}>
        {label}
      </InputLabel>
      <Slider
        value={field.value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        {...configSlider}
      />
    </FormControl>
  );
};

export default SlideWrapper;
