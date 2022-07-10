import React from "react";
import { FormLabel } from "@mui/material";

export function Label(props) {
  return (
    <FormLabel
      sx={{
        fontWeight: "bold",
        color: "#495371",
      }}
      component="legend"
    >
      {props.legend}
    </FormLabel>
  );
}
