import { Grid, Typography } from "@mui/material";
import React from "react";
import ScanMode from "../CardiacForm/scanMode";

function CardiacExamRecord({ data, formik, isSuccess, autocompleteOptions }) {
  return (
    <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
      <ScanMode
        autocompleteOptions={autocompleteOptions}
        formik={formik}
        isSuccess={isSuccess}
        data={data}
      />
    </Grid>
  );
}

export default CardiacExamRecord;
