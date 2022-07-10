import React from "react";
import { Slider, FormControl, InputLabel, Input, Grid } from "@mui/material";
import { useField, useFormikContext } from "formik";
import useDebounceInput from "../../../hooks/useDebounce.js";
import TextField from "../Textfield";

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

  const configSlider = {
    ...field,
    ...otherProps,
    onChangeCommitted: handleChange,
    defaultValue: field.value ? field.value : [0, 0],
    step: 5,
  };
  if (meta && meta.touched && meta.error) {
    configSlider.error = true;
    configSlider.helperText = meta.error;
  }
  return (
    <Grid spacing={1} container alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <InputLabel component="label" id={`label-${label}`}>
          {label}
        </InputLabel>
      </Grid>
      <Grid item xs={3}>
        <TextField
          name={`${name}[0]`}
          size="small"
          inputProps={{
            step: 5,
            min: 0,
            max: 100,
            type: "number",
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Slider valueLabelDisplay="auto" {...configSlider} />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name={`${name}[1]`}
          size="small"
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
