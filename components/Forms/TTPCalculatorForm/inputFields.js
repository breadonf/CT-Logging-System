import React from "react";
import { Box, Grid, Button } from "@mui/material";
import Textfield from "~/components/FormsUI/Textfield";

function InputFields({ formik }) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        p: 2,
        m: 2,
        borderRadius: 5,
        border: 1,
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Textfield name="rate" label="Injection Rate (ml/s)"></Textfield>
        </Grid>
        <Grid item xs={4}>
          <Textfield name="weight" label="Weight (kg)"></Textfield>
        </Grid>
        <Grid item xs={4} sx={{ alignSelf: "center" }}>
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
      </Grid>
    </Box>
  );
}

export default InputFields;
