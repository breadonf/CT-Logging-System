import React from "react";
import { Grid, Paper, Container } from "@mui/material";
import MessageHistoryHeading from "./heading";
import BoxArray from "./boxArray";

function MessageHistory({ _data }) {
  return (
    <Grid
      container
      spacing={2}
      sx={{ height: "90vh", justifyContent: "center" }}
    >
      <Grid item xs={12} sx={{ m: 2 }}>
        <Container
          sx={{
            height: "90vh",
            minWidth: "70%",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper
                sx={{
                  boxShadow: 4,
                  height: "85vh",
                  px: 2,
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
                  <BoxArray data={data} />
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}

export default MessageHistory;
