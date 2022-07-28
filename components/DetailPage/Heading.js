import React from "react";
import { Grid, Box, Typography } from "@mui/material";

function Heading({ data }) {
  return (
    <Box sx={{ backgroundColor: "#333333" }}>
      <Grid container spacing={2} sx={{ px: 2, py: 2 }}>
        <Grid item xs={8}>
          <Typography variant="h5" color="#FFFFFF" align="left">
            {data.PID} | {data.protocol}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" color="#FFFFFF" align="right">
            {data.Date_func.year}-{data.Date_func.month}-{data.Date_func.day}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Heading;
