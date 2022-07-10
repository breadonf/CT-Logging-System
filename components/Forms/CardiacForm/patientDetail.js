import React from "react";
import SickIcon from "@mui/icons-material/Sick";
import { Grid, Typography } from "@mui/material";
import Textfield from "../../FormsUI/Textfield";
import DateTimePicker from "../../FormsUI/DateTimePicker";

function PatientDetail() {
  return (
    <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
      <Grid item xs={12}>
        <Typography variant="h5" color="#05668D">
          <SickIcon sx={{ mr: 1 }} /> Patient Details
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Textfield name="PID" label="Patient ID (e.g. A1234567)"></Textfield>
      </Grid>
      <Grid item xs={4}>
        <Textfield name="name" label="Patient Name"></Textfield>
      </Grid>
      <Grid item xs={4}>
        <DateTimePicker name="date" label="Exam Date" />
      </Grid>
      <Grid item xs={4}>
        <Textfield
          name="radiologistInCharge"
          label="Reporting Radiologist"
        ></Textfield>
      </Grid>
    </Grid>
  );
}

export default PatientDetail;
