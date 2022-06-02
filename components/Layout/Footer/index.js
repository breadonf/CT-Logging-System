import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
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
      spacing={2}
      sx={{
        position: "fix",
      }}
    >
      <Grid item sx={{ minWidth: "100%" }} xs={12}>
        <Box
          sx={{
            backgroundColor: "#000001",
            minHeight: "3vh",
            minWidth: "100%",
          }}
        >
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}
