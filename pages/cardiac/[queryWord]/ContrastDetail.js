import React from "react";
import { Grid, Typography } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CancelIcon from "@mui/icons-material/Cancel";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";

export function ContrastDetail({ cardiacCT_by_id }) {
  return (
    <Grid
      container
      spacing={2}
      component={"div"}
      sx={{
        py: 4,
      }}
    >
      <Grid
        item
        xs={2}
        sx={{
          pr: 2,
        }}
      >
        <Typography variant="h5" color="#265B67">
          <ShutterSpeedIcon
            sx={{
              mr: 1,
            }}
          />
          Contrast
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
            {" "}
            Injection Site: {cardiacCT_by_idinjectionSite}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Hand Injection:
            {cardiacCT_by_idhandInjection ? (
              <CheckRoundedIcon
                sx={{
                  ml: 1,
                }}
              />
            ) : (
              <CancelIcon
                sx={{
                  ml: 1,
                }}
              />
            )}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Mixed Contrast:
            {cardiacCT_by_id.mixedContrast ? (
              <CheckRoundedIcon
                sx={{
                  ml: 1,
                }}
              />
            ) : (
              <CancelIcon
                sx={{
                  ml: 1,
                }}
              />
            )}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Contrast Agent: {cardiacCT_by_id.contrastType}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Rate: {cardiacCT_by_id.rate} ml/s
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Volume: {cardiacCT_by_id.volume} ml
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Direct Post Con?:
            {cardiacCT_by_id.directPostContrast ? (
              <CheckRoundedIcon
                sx={{
                  ml: 1,
                }}
              />
            ) : (
              <CancelIcon
                sx={{
                  ml: 1,
                }}
              />
            )}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Time to peak: {cardiacCT_by_id.ttp} s
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Delays:{cardiacCT_by_id.delays} s
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
