import React from "react";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import { Grid, Typography, Chip } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CancelIcon from "@mui/icons-material/Cancel";

function ExamDetail({ data }) {
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
            Date: {data.Date_func.year}-{data.Date_func.month}-
            {data.Date_func.day}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Urgent?:
            {data.urgent ? (
              <CheckRoundedIcon sx={{ ml: 1 }} />
            ) : (
              <CancelIcon sx={{ ml: 1 }} />
            )}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Sedation?:
            {data.sedation ? (
              <>
                <CheckRoundedIcon sx={{ ml: 1 }} />
                {data.sedatedBy ? <>by: {data.sedatedBy}</> : <></>}

                {data.sedationMethod ? (
                  <> | with: {data.sedationMethod}</>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <CancelIcon sx={{ ml: 1 }} />
            )}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="#333333">
            Protocol:
            {data.protocol.map((protocol) => (
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
            kV (Tube A):
            {data.kV_a.map((kV) => (
              <Chip
                key={kV}
                variant="outlined"
                color="error"
                label={kV}
                sx={{ ml: 2 }}
              />
            ))}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          {data.kV_b && (
            <Typography variant="h6" color="#333333">
              kV (Tube B):
              {data.kV_b.map((kV) => (
                <Chip
                  key={kV}
                  variant="outlined"
                  color="error"
                  label={kV}
                  sx={{ ml: 2 }}
                />
              ))}
            </Typography>
          )}
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#333333">
            Pitch:
            {data.pitch.map((pitch) => (
              <Chip
                key={pitch}
                variant="outlined"
                color="error"
                label={pitch}
                sx={{ ml: 2 }}
              />
            ))}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ExamDetail;
