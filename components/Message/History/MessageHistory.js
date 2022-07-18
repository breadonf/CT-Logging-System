import React from "react";
import { Grid, Paper } from "@mui/material";
import MessageHistoryHeading from "./heading";
import BoxArray from "./boxArray";

function MessageHistory({ data }) {
  return (
    <Grid
      container
      spacing={2}
      sx={{ Height: "90vh", justifyContent: "center" }}
    >
      <Grid item xs={10} sx={{ m: 2 }}>
        <Paper sx={{ Height: "85vh", px: 2, py: 2, mt: 2, bgcolor: "#222222" }}>
          <MessageHistoryHeading />
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
            <BoxArray />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default MessageHistory;
