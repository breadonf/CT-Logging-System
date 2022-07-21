import React from "react";
import { Grid, Typography } from "@mui/material";
import SickIcon from "@mui/icons-material/Sick";

export default function PatientDetail({ cardiacCT_by_id }) {
  return (
    <Grid
      justifyContent="center"
      alignItems="center"
      container
      spacing={1}
      component={"div"}
      sx={{ py: 5 }}
    >
      <Grid item xs={3} sx={{ pr: 2 }}>
        <Typography variant="h5" color="#265B67">
          <SickIcon sx={{ mr: 1 }} />
          Patient Detail
        </Typography>
      </Grid>
      <Grid
        container
        xs={9}
        spacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{
          border: 1,
          borderRadius: 1,
          backgroundColor: "#EEEEEE",
          py: 1,
        }}
      >
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Patient name: {cardiacCT_by_id.name}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            ID: {cardiacCT_by_id.PID}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Exam Date: {cardiacCT_by_id.date_func.year}-
            {cardiacCT_by_id.date_func.month}-{cardiacCT_by_id.date_func.day}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
