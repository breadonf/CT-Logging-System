import React from "react";
import { Grid, Typography } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CancelIcon from "@mui/icons-material/Cancel";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import Chip from "@mui/material/Chip";

export function ExamDetail(CT_by_id) {
  return (
    <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
      <Grid item xs={2} sx={{ pr: 2 }}>
        <Typography variant="h5" color="#265B67">
          <ImageSearchIcon sx={{ mr: 1 }} />
          Exam
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
            Date: {CT_by_id.date_func.year}-{CT_by_id.date_func.month}-
            {CT_by_id.date_func.day}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Urgent?:
            {CT_by_id.urgent ? (
              <CheckRoundedIcon sx={{ ml: 1 }} />
            ) : (
              <CancelIcon sx={{ ml: 1 }} />
            )}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Sedation?:
            {CT_by_id.sedation ? (
              <CheckRoundedIcon sx={{ ml: 1 }} />
            ) : (
              <CancelIcon sx={{ ml: 1 }} />
            )}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="#333333">
            Protocol:
            {CT_by_id.protocol.map((protocol) => (
              <Chip
                key={protocol}
                variant="outlined"
                color="error"
                label={protocol}
                sx={{ ml: 2 }}
              />
            ))}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            kV (Tube A):{CT_by_id.kV_a}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          {CT_by_id.kV_b && (
            <Typography variant="h6" color="#333333">
              kV (Tube B):{CT_by_id.kV_b}
            </Typography>
          )}
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Pitch:{CT_by_id.pitch}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
