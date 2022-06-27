import React from "react";
import AutocompleteWrapper from "../../FormsUI/AutocompleteWrapper";
import { Grid, Typography } from "@mui/material";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import Textfield from "../../FormsUI/Textfield";

function StaffDetail({ isSuccess, autocompleteOptions, data }) {
  return (
    <Grid container spacing={2} component={"div"} sx={{ py: 3 }}>
      <Grid item xs={12}>
        <Typography variant="h5" color="#05668D">
          <AirlineSeatReclineExtraIcon sx={{ mr: 1 }} />
          Staff Details (Optional)
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <AutocompleteWrapper
          multiple={true}
          id="radiographers"
          name="radiographers"
          label="Radiographer(s)"
          prepopulatedValue={data.radiographers ?? []}
          autocompleteOptions={
            isSuccess ? autocompleteOptions.radiographers : []
          }
        ></AutocompleteWrapper>
      </Grid>
      <Grid item xs={4}>
        <AutocompleteWrapper
          multiple={true}
          id="radiologists"
          name="radiologists"
          label="Radiologist(s)"
          prepopulatedValue={data.radiologists ?? []}
          autocompleteOptions={
            isSuccess ? autocompleteOptions.radiologists : []
          }
        ></AutocompleteWrapper>
      </Grid>
      <Grid item xs={4}>
        <AutocompleteWrapper
          multiple={true}
          id="nurses"
          name="nurses"
          label="Nurse(s)"
          prepopulatedValue={data.nurses ?? []}
          autocompleteOptions={isSuccess ? autocompleteOptions.nurses : []}
        ></AutocompleteWrapper>
      </Grid>
    </Grid>
  );
}

export default StaffDetail;
