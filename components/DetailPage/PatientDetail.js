import React from "react";
import { Grid, Typography } from "@mui/material";
import SickIcon from "@mui/icons-material/Sick";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CancelIcon from "@mui/icons-material/Cancel";

function PatientDetail({ data }) {
  return (
    <Grid container spacing={1} component={"div"} sx={{ py: 5 }}>
      <Grid item xs={2} sx={{ pr: 2 }}>
        <Typography variant="h5" color="#265B67">
          <SickIcon sx={{ mr: 1 }} />
          Patient
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
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            ID: {data.PID}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Age: {data.age} y
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            In patient?:
            {data.inPatient ? (
              <CheckRoundedIcon sx={{ ml: 1 }} />
            ) : (
              <CancelIcon sx={{ ml: 1 }} />
            )}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Height: {data.height} cm
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Weight: {data.weight} kg
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Circumference: {data.circumference} cm
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PatientDetail;
