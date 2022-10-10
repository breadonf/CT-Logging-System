import { Container, Grid, Paper } from "@mui/material";

import BoxArray from "./BoxArray";
import MessageHistoryHeading from "./heading";
import React from "react";

function MessageHistory({ data }) {
  return (
    <Container sx={{ pt: 1, pb: 2 }} maxWidth="lg">
      <Grid container sx={{ minHeight: "85vh", justifyContent: "center" }}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper
                sx={{
                  boxShadow: 4,
                  height: "85vh",
                  py: 2,
                  mt: 2,
                  bgcolor: "#222222",
                }}
              >
                <MessageHistoryHeading />
                <Grid
                  container
                  spacing={2}
                  sx={{
                    justifyContent: "center",
                    alignContent: "flex-start",
                    p: 2,
                    height: "70vh",
                    overflowY: "auto",
                  }}
                >
                  <Grid item xs={12}>
                    {/**HACK need to place a grid before box array to allow it to */}
                    <BoxArray data={data} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MessageHistory;
