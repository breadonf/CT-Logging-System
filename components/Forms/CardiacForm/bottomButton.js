import { Button, Grid } from "@mui/material";

import React from "react";

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
          onClick={formik.resetForm()}
          fullWidth
        >
          Reset
        </Button>
      </Grid>
    </Grid>
  );
}

export default BottomButton;
