import React from "react";
import Link from "next/link";
import { Grid, Button } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import BorderColorIcon from "@mui/icons-material/BorderColor";

function BottomButton({ Id }) {
  return (
    <Grid
      container
      spacing={3}
      component={"div"}
      sx={{ pt: 4, justifyContent: "center" }}
    >
      <Grid item xs={4}>
        <Link passHref href={"/Table"}>
          <Button variant="contained" fullWidth>
            <ArrowCircleLeftIcon sx={{ mr: 1 }} />
            Back to Table
          </Button>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link passHref href={`/Forms/editForm/${Id}`}>
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
