import React from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormHelperText from "@mui/material/FormHelperText";
import { FormControlLabel } from "@mui/material";
import Radio from "@mui/material/Radio";
import { useField, useFormikContext } from "formik";

const RadioGroupWrapper = ({ name, legend, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  console.log(options);
  const handleChange = (e) => {
    console.log(e.target.value);
    setFieldValue(name, e.target.value);
  };

  const configRadioGroup = {
    ...field,
    ...otherProps,
    onChange: handleChange,
  };
  const configFormLabel = {};
  if (meta && meta.touched && meta.error) {
    configFormLabel.error = true;
    configFormLabel.helperText = meta.error;
  }
  return (
    <FormControl>
      <FormLabel
        {...configFormLabel}
        component="legend"
        sx={{ fontWeight: "bold", color: "#495371" }}
      >
        {legend}
      </FormLabel>
      <RadioGroup {...configRadioGroup}>
        {options.map((option) => {
          return (
            <FormControlLabel
              label={option.label}
              key={`${option.value}-${option.index}`}
              value={option.value}
              control={<Radio />}
            />
          );
        })}
      </RadioGroup>
      {meta && meta.touched && meta.error ? (
        <FormHelperText error required>
          Required
        </FormHelperText>
      ) : (
        <></>
      )}
    </FormControl>
  );
};

export default RadioGroupWrapper;
