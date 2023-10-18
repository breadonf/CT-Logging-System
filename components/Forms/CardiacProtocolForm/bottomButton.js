import { Button, Grid } from "@mui/material";

import React from "react";

function BottomButton({ formik, setRecordMode, recordMode, readyForRecord }) {
  function onClickRecordMode(e) {
    e.preventDefault();
    setRecordMode((curr) => !curr);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
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
          onClick={formik.resetForm}
          fullWidth
        >
          Reset
        </Button>
      </Grid>
      {readyForRecord ? (
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="secondary"
            onClick={onClickRecordMode}
            fullWidth
          >
            {recordMode ? "Back to Protocoling" : "Go to Record Mode"}
          </Button>
        </Grid>
      ) : (
        <></>
      )}
    </Grid>
  );
}

export default BottomButton;
