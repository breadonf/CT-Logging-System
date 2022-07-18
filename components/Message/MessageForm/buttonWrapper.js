import React from "react";
import { Grid, Button } from "@mui/material";

function ButtonWrapper({ formik }) {
  return (
    <Grid
      container
      spacing={2}
      component={"div"}
      justifyContent="center"
      alignContent="center"
      sx={{ py: 4 }}
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
          onClick={formik.resetForm}
          fullWidth
        >
          Reset
        </Button>
      </Grid>
    </Grid>
  );
}

export default ButtonWrapper;
