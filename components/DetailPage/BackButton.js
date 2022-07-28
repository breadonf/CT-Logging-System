import React from "react";
import Link from "next/link";
import { Grid, Button } from "@mui/material";

function BackButton() {
  return (
    <Grid
      container
      spacing={1}
      component={"div"}
      sx={{ pt: 4, justifyContent: "center" }}
    >
      <Grid item xs={6}>
        <Link passHref href={`/Table`}>
          <Button variant="contained" fullWidth>
            Back to Table
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default BackButton;
