import { Button, Grid } from "@mui/material";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Link from "next/link";
import React from "react";

function BottomButton({ Id }) {
  return (
    <Grid
      container
      spacing={3}
      component={"div"}
      sx={{ pt: 4, justifyContent: "center" }}
    >
      <Grid item xs={4}>
        <Link passHref href={"/general/table"}>
          <Button variant="contained" fullWidth>
            <ArrowCircleLeftIcon sx={{ mr: 1 }} />
            Back to Table
          </Button>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link passHref href={`/forms/editForm/${Id}`}>
          <Button variant="contained" color="secondary" fullWidth>
            Edit this record <BorderColorIcon sx={{ ml: 1 }} />
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
// need to add edit button
export default BottomButton;
