import React from "react";
import { TextField, MenuItem, InputLabel } from "@mui/material";
import Select from "@mui/material/Select";
import { useField, useFormikContext } from "formik";
import FormControl from "@mui/material/FormControl";

const SelectWrapper = ({ name, options, multiple, label, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e) => {
    const { value } = e.target;
    const result = [];
    result.push(value);
    console.log(result);
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
    defaultValue: [],
    label: label,
    labelId: label,
  };
  console.log(label);
  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <FormControl fullWidth>
      <TextField
        {...configSelect}
        sx={{
          input: { color: "#05668D" },
          label: { fontWeight: "bold", color: "#495371" },
        }}
      >
        <InputLabel id={`label-${label}`}>{label}</InputLabel>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
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
