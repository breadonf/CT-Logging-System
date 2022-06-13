import React from "react";
import { TextField, MenuItem, InputLabel } from "@mui/material";
import Select from "@mui/material/Select";
import { isEmptyArray, useField, useFormikContext } from "formik";
import FormControl from "@mui/material/FormControl";

const SelectWrapper = ({
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
    console.log(value);
    setFieldValue(name, value);
  };

  const configSelect = {
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
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }
  return (
    <FormControl fullWidth>
      <TextField
        {...configSelect}
        sx={{
          ...sx,
          input: { color: "#05668D" },
          label: { ...sx, fontWeight: "bold", color: "#495371" },
        }}
      >
        <InputLabel id={`label-${label}`}>{label}</InputLabel>

        {Object.keys(options).map((item, pos) => {
          return (
            <MenuItem key={pos} value={item}>
              {options[item]}
            </MenuItem>
          );
        })}
      </TextField>
    </FormControl>
  );
};

export default SelectWrapper;
