import React from "react";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import { Chip, Grid, Typography } from "@mui/material";

function StaffDetail({ data }) {
  return (
    <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
      <Grid item xs={2}>
        <Typography variant="h5" color="#265B67">
          <AirlineSeatReclineExtraIcon sx={{ mr: 1 }} />
          Staff
        </Typography>
      </Grid>
      <Grid
        container
        xs={10}
        spacing={1}
        sx={{
          border: 1,
          borderRadius: 1,
          backgroundColor: "#EEEEEE",
          py: 1,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h6" color="#333333">
            Radiographer(s): {data.radiographers.map((radiographer) => (
              <Chip
                key={radiographer}
                variant="outlined"
                color="primary"
                label={radiographer}
                sx={{ ml: 1 }}
              />
            ))}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="#333333">
            Radiologist(s):
            {data.radiologists.map((radiologist) => (
              <Chip
                key={radiologist}
                variant="outlined"
                color="primary"
                label={radiologist}
                sx={{ ml: 1 }}
              />
            ))}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="#333333">
            Performing Nurse(s): {data.nurses.map((nurse) => (
              <Chip
                key={nurse}
                variant="outlined"
                color="primary"
                label={nurse}
                sx={{ ml: 1 }}
              />
            ))}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default StaffDetail;
