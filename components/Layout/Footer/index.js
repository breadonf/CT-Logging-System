import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        CT IntelliTimer
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Grid
      container
      sx={{
        position: "fixed",
        bgcolor: "black",
        minHeight: "5vh",
        maxHeight: "5vh",
      }}
    >
      <Grid item sx={{ minWidth: "100%" }} xs={12}>
        <Box
          sx={{
            minHeight: "5vh",
            maxHeight: "5vh",
            minWidth: "100%",
            mt: 2,
          }}
        >
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}
