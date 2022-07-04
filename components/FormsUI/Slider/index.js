import React from "react";
import { Slider, FormControl, InputLabel, Input } from "@mui/material";
import { useField, useFormikContext } from "formik";
import useDebounceInput from "../../../hooks/useDebounce.js";

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

  const handleChange = (e, valueFromDefault) => {
    setFieldValue(name, valueFromDefault);
  };
  const handleInputChange = (e, valueFromDefault) => {
    console.log(Number(e.target.value));
    setFieldValue(name, valueFromDefault);
  };

  const configSlider = {
    ...field,
    ...otherProps,
    fullWidth: true,
    onChangeCommitted: handleChange,
    SelectProps: {
      multiple: multiple,
    },
    defaultValue: field.value ? field.value : [10, 90],
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
      <Slider valueLabelDisplay="auto" {...configSlider} />
      <Input
        value={field.value[0]}
        size="small"
        onChange={handleInputChange}
        inputProps={{
          step: 10,
          min: 0,
          max: 100,
          type: "number",
          "aria-labelledby": "input-slider",
        }}
      />
      <Input
        value={field.value[1]}
        size="small"
        onChange={handleInputChange}
        inputProps={{
          step: 10,
          min: 0,
          max: 100,
          type: "number",
          "aria-labelledby": "input-slider",
        }}
      />
    </FormControl>
  );
};

export default SlideWrapper;
