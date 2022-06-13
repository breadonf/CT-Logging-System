import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

export default function FormSelection() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Link href={"/Forms/RoutineCases"} passHref>
          <Box
            sx={{
              display: "flex",
              minHeight: "90vh",
              bgcolor: "#00A896",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button>
              <Typography variant="h1" color={"white"}>
                Routine
                <AccessibilityIcon sx={{ fontSize: 80, color: "yellow" }} />
              </Typography>
            </Button>
          </Box>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link href={"/Forms/CardiacCases"} passHref>
          <Box
            sx={{
              display: "flex",
              minHeight: "90vh",
              bgcolor: "#093A3E",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button>
              <Typography variant="h1" color={"white"}>
                Cardiac
                <HeartBrokenIcon sx={{ fontSize: 80, color: "red" }} />
              </Typography>
            </Button>
          </Box>
        </Link>
      </Grid>
    </Grid>
  );
}
