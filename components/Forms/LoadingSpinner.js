import { Container, Grid, Paper } from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import { toast } from "react-hot-toast";

export function LoadingSpinner({ bgColor = "#F0F3BD", error = false }) {
  return (
    <Grid sx={{ py: 3 }} container>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <Paper
            elevation={12}
            sx={{
              p: 3,
              height: "85vh",
              bgcolor: bgColor,
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
              {error ? (
                toast.error(`${error}`, {
                  style: {
                    border: "1px solid #713200",
                    padding: "40px",
                    color: "#713200",
                    fontSize: "1.5rem",
                    minWidth: "20%",
                  },
                  duration: 4000,
                })
              ) : (
                <Grid item xs={12}>
                  <CircularProgress size="25vh" />
                </Grid>
              )}
            </Grid>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}
