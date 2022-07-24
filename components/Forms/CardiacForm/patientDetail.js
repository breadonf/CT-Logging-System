import React from "react";
import SickIcon from "@mui/icons-material/Sick";
import { Grid, Typography } from "@mui/material";
import Textfield from "../../FormsUI/Textfield";
import DateTimePicker from "../../FormsUI/DateTimePicker";
import Autocomplete from "../../FormsUI/AutocompleteWrapper";
import { alphabeticalSort } from "../../../helpers/alphabeticalSort";
import FastTextField from "/components/FormsUI/FastTextField";
function PatientDetail({ isSuccess, autocompleteOptions, data }) {
  return (
    <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
      <Grid item xs={12}>
        <Autocomplete
          multiple={true}
          id="radiologistInCharge"
          name="radiologistInCharge"
          label="Reporting radiologist(s)"
          prepopulatedValue={data.radiologistInCharge ?? []}
          autocompleteOptions={
            isSuccess
              ? autocompleteOptions.radiologists.sort((a, b) =>
                  alphabeticalSort(a, b)
                )
              : []
          }
        ></Autocomplete>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" color="#05668D">
          <SickIcon sx={{ mr: 1 }} /> Patient Details
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <FastTextField
          name="PID"
          label="Patient ID (e.g. A1234567)"
        ></FastTextField>
      </Grid>
      <Grid item xs={4}>
        <Textfield name="name" label="Patient Name"></Textfield>
      </Grid>
      <Grid item xs={4}>
        <DateTimePicker name="date" label="Exam Date" />
      </Grid>
    </Grid>
  );
}

export default PatientDetail;
