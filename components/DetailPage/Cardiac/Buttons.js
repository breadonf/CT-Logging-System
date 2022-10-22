import { Button, Grid } from "@mui/material";

import Link from "next/link";
import React from "react";

export default function Buttons({ cardiacCT_by_id }) {
  return (
    <Grid
      container
      spacing={1}
      component={"div"}
      sx={{
        pt: 4,
        justifyContent: "center",
      }}
    >
      <Grid item xs={6}>
        <Link passHref href={`/cardiac/table`}>
          <Button variant="contained" fullWidth>
            Back to Table
          </Button>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link passHref href={`/forms/editCardiacSetup/${cardiacCT_by_id.id}`}>
          <Button variant="contained" fullWidth>
            Edit
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
