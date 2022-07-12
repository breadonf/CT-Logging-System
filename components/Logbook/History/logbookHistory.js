import React from "react";
import { Grid, Divider, Paper } from "@mui/material";
import LogHistoryHeading from "./heading";
import MessageBox from "./messageBox";

function LogbookHistory({ data }) {
  return (
    <Grid
      container
      spacing={2}
      sx={{ minHeight: "45vh", justifyContent: "center" }}
    >
      <Grid item xs={10} sx={{ m: 2 }}>
        <Paper sx={{ px: 2, py: 2, mt:2 }}>
          <LogHistoryHeading />
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: "center",
              py: 2,
              pr:2,
              height: "70vh",
              overflowY: "auto",
            }}
          >
            <MessageBox />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default LogbookHistory;
