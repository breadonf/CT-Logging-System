import { InputLabel, ListSubheader, MenuItem, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useField, useFormikContext } from "formik";
import React from "react";

const SelectWrapper = ({
  name,
  options,
  prepopulatedValue,
  label,

  sx,
  grouped,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };
  const renderSelectGroup = (groups) => {
    const itemsObject = groups.roi.map((p) => {
      return (
        <MenuItem key={p.id} value={p.id}>
          {p.name}
        </MenuItem>
      );
    });
    return [<ListSubheader disabled>{groups.name}</ListSubheader>, itemsObject];
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: "filled",
    fullWidth: true,
    onChange: handleChange,

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
          alignItems: "center",
          input: { color: "#05668D" },
          label: { ...sx, fontWeight: "bold", color: "#495371" },
        }}
      >
        <InputLabel disabled component="label" id={`label-${label}`}>
          {label}
        </InputLabel>

        {grouped
          ? options?.map((items) => renderSelectGroup(items))
          : Object.keys(options).map((item, pos) => {
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
