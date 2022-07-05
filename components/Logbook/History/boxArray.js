import React from "react";
import { Grid } from "@mui/material";
import mockLogbookData from "./mockLogbookData.json"

function BoxArray() {
  return (
    <Grid comtainer spacing={1}>
      {mockLogbookData.map((item) => {
        return (
          <Grid item>
            <Box>

            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default BoxArray;
