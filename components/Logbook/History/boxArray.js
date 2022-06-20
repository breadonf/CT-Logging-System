import React from "react";
import { Grid } from "@mui/material";

function boxArray(data) {
  return (
    <Grid comtainer spacing={1}>
      {data.map((message) => {
        return (
          <Grid item key={message}>
            <Box></Box>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default boxArray;
