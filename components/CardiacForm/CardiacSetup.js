import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Chip from "@mui/material/Chip";

export default function CardiacSetup({ cardiacCT_by_id }) {
  return (
    <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
      <Grid item xs={3} sx={{ pr: 2 }}>
        <Typography variant="h5" color="#265B67">
          <SettingsIcon sx={{ mr: 1 }} />
          Cardiac Setup
        </Typography>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="space-evenly"
        xs={9}
        spacing={1}
        sx={{
          border: 1,
          borderRadius: 1,
          backgroundColor: "#EEEEEE",
          py: 1,
        }}
      >
        <Grid item xs={3}>
          <Typography variant="h6" color="#333333">
            Sedation: {cardiacCT_by_id?.sedation}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" color="#333333">
            Breathing Control: {cardiacCT_by_id?.breathingControl}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" color="#333333">
            Target Heart Rate: {cardiacCT_by_id?.targetHR}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" color="#333333">
            Timing: {cardiacCT_by_id?.scanMode.monitoringMethod} at{" "}
            {cardiacCT_by_id?.scanMode.ROI}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider sx={{ mb: 3 }} />
      </Grid>

      <Grid item xs={3} sx={{ pr: 2 }}>
        <Typography variant="h5" color="#265B67">
          <SettingsIcon sx={{ mr: 1 }} />
          IV Sites
        </Typography>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        xs={9}
        spacing={1}
        sx={{
          height: "12vh",
          border: 1,
          borderRadius: 1,
          backgroundColor: "#EEEEEE",
          py: 1,
        }}
      >
        {cardiacCT_by_id?.IVSite.map((x, i) => (
          <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            xs={12}
            spacing={1}
            sx={{
              height: "5vh",
              border: 1,
              borderRadius: 1,
              backgroundColor: "#EEEEEE",
              m: 1,
              p: 2,
            }}
          >
            <Grid item xs={1}>
              <Chip label={`${i + 1}`} />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="h6" color="#333333">
                {cardiacCT_by_id?.IVSite[i].side}{" "}
                {cardiacCT_by_id?.IVSite[i].location} Diffusics:
                {cardiacCT_by_id?.IVSite[i].Diffusics ? "Yes" : "No"}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
