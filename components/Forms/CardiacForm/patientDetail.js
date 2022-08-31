import SickIcon from "@mui/icons-material/Sick";
import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import DateTimePicker from "../../FormsUI/DateTimePicker";
import Textfield from "../../FormsUI/Textfield";
import FastTextField from "/components/FormsUI/FastTextField";

function PatientDetail({ isSuccess, autocompleteOptions, data }) {
  return (
    <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
      <Grid item xs={12}>
        <Typography variant="h5" color="#05668D">
          <SickIcon sx={{ mr: 1 }} /> Patient Details
        </Typography>
        <Divider />
      </Grid>
      <Grid item xs={4}>
        <FastTextField
          name="PID"
          label="Patient ID (e.g. A1234567)"
        ></FastTextField>
      </Grid>
      <Grid item xs={4}>
        <Textfield name="age" label="Age"></Textfield>
      </Grid>
      <Grid item xs={4}>
        <DateTimePicker name="date" label="Exam Date" />
      </Grid>
    </Grid>
  );
}

export default PatientDetail;
