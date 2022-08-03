import React from "react";
import { resetForm } from "formik";
import { Grid, Button } from "@mui/material";

function BottomButton({ formik }) {
  return (
    <Grid
      container
      spacing={2}
      component={"div"}
      sx={{ py: 4, justifyContent: "center" }}
    >
      <Grid item xs={4}>
        <Button
          variant="contained"
          type="submit"
          value="Submit"
          fullWidth
          disabled={formik.isSubmitting}
        >
          Submit
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          type="reset"
          value="Reset"
          onClick={resetForm}
          fullWidth
        >
          Reset
        </Button>
      </Grid>
    </Grid>
  );
}

export default BottomButton;
