import React from "react";
import { Grid, Paper } from "@mui/material";
import LogHistoryHeading from "./heading";
import MessageBox from "./messageBox";
import BoxArray from "./boxArray";

function LogbookHistory({ data }) {
  return (
    <Grid
      container
      spacing={2}
      sx={{ Height: "90vh", justifyContent: "center" }}
    >
      <Grid item xs={10} sx={{ m: 2 }}>
        <Paper sx={{ Height: "85vh", px: 2, py: 2, mt: 2, bgcolor: "#222222" }}>
          <LogHistoryHeading />
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: "center",
              p: 2,
              height: "70vh",
              overflowY: "auto",
            }}
          >
            {/* should be Box array, message box for testing only */}
            <BoxArray />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default LogbookHistory;
