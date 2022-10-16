import React from "react";
import AutocompleteWrapper from "../../FormsUI/AutocompleteWrapper";
import { Grid, Typography } from "@mui/material";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import { alphabeticalSort } from "../../../helpers/alphabeticalSort";
function StaffDetail({ isSuccess, autocompleteOptions, data }) {
  return (
    <Grid container spacing={2} component={"div"} sx={{ py: 3 }}>
      <Grid item xs={12}>
        <Typography variant="h5" color="#05668D">
          <AirlineSeatReclineExtraIcon sx={{ mr: 1 }} />
          Staff Detail (Optional)
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <AutocompleteWrapper
          multiple={true}
          id="radiographers"
          name="radiographers"
          label="Radiographer(s)"
          prepopulatedvalue={data.radiographers ?? []}
          autocompleteOptions={
            isSuccess
              ? autocompleteOptions.radiographers.sort((a, b) =>
                  alphabeticalSort(a, b)
                )
              : []
          }
        ></AutocompleteWrapper>
      </Grid>
      <Grid item xs={4}>
        <AutocompleteWrapper
          multiple={true}
          id="radiologists"
          name="radiologists"
          label="Radiologist(s)"
          prepopulatedvalue={data.radiologists ?? []}
          autocompleteOptions={
            isSuccess
              ? autocompleteOptions.radiologists.sort((a, b) =>
                  alphabeticalSort(a, b)
                )
              : []
          }
        ></AutocompleteWrapper>
      </Grid>
      <Grid item xs={4}>
        <AutocompleteWrapper
          multiple={true}
          id="nurses"
          name="nurses"
          label="Nurse(s)"
          prepopulatedvalue={data.nurses ?? []}
          autocompleteOptions={
            isSuccess
              ? autocompleteOptions.nurses.sort((a, b) =>
                  alphabeticalSort(a, b)
                )
              : []
          }
        ></AutocompleteWrapper>
      </Grid>
    </Grid>
  );
}

export default StaffDetail;
