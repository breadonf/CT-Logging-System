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
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        position: "absolute",
        bottom: 0,
      }}
    >
      <Grid
        sx={{ minWidth: "100%" }}
        justifyContent="center"
        alignItems="center"
        direction="column"
        container
        item
        xs={12}
      >
        <Box
          pt={10}
          sx={{
            backgroundColor: "#000001",
            minHeight: "5vh",
            minWidth: "100%",
            padding: 0,
            justifyContent: "center",
          }}
        >
          <Grid item>
            <Copyright />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
