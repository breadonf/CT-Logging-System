import React from "react";
import { Grid, Typography, Divider, Box, Paper } from "@mui/material";

function LogbookHistory() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ minHeight: "45vh", justifyContent: "center" }}
    >
      <Grid item xs={10} sx={{m:2}}>
        <Paper sx={{px:2, py:2}}>
          <Grid item xs={12}>
            <Typography variant="h2" textAlign={"center"}>
              History
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={12} sx={{py:2}}>
            <Box sx={{ border: 2, borderRadius: 2 }}>
              <Typography>some words</Typography>
            </Box>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default LogbookHistory;
