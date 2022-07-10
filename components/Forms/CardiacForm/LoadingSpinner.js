import React from "react";
import { Paper, Grid, Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export function LoadingSpinner() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <Paper
            elevation={12}
            sx={{
              p: 3,
              height: "85vh",
              bgcolor: "#F0F3BD",
              overflowY: "auto",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                py: 5,
              }}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <CircularProgress size="25vh" />
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}
