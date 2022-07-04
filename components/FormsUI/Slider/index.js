import React from "react";
import { Slider, FormControl, InputLabel, Input, Grid } from "@mui/material";
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
  const { setFieldValue, values } = useFormikContext();
  const [field, meta] = useField(name);
  const handleChange = (e, valueFromDefault) => {
    setFieldValue(name, valueFromDefault);
  };
  const handleInputChange = (e) => {
    
    setFieldValue(name, e.target.value);
  };

  const configSlider = {
    ...field,
    ...otherProps,
    fullWidth: true,
    onChangeCommitted: handleChange,
    SelectProps: {
      multiple: multiple,
    },
    defaultValue: field.value ? field.value : [0, 0],
    label: label,
    step: 5,
  };
  if (meta && meta.touched && meta.error) {
    configSlider.error = true;
    configSlider.helperText = meta.error;
  }
  return (
    <Grid container>
      <Grid item xs={12} spacing={1}>
        <InputLabel component="label" id={`label-${label}`}>
          {label}
        </InputLabel>
      </Grid>
      <Grid item xs={8}>
        <Slider valueLabelDisplay="auto" {...configSlider} />
      </Grid>
      <Grid item xs={2}>
        <Input
          value={values.scanMode.ss.range[0]}
          size="small"
          onChange={handleInputChange}
          inputProps={{
            step: 5,
            min: 0,
            max: 100,
            type: "number",
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <Input
          value={values.scanMode.ss.range[1]}
          size="small"
          onChange={handleInputChange}
          inputProps={{
            step: 5,
            min: 0,
            max: 100,
            type: "number",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SlideWrapper;
