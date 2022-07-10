import React from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

export function CheckboxWrapping(props) {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              fontWeight: "bold",
              color: "#495371",
            }}
            {...props.configCheckbox}
          />
        }
        label={props.label}
      />
    </FormGroup>
  );
}
