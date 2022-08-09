import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import SwipeUpIcon from "@mui/icons-material/SwipeUp";
import { Chip, Divider, Grid, Typography } from "@mui/material";
import React from "react";

function ContrastDetail({ data }) {
  return (
    <>
      <Grid container spacing={2} component={"div"} sx={{ py: 4 }}>
        <Grid item xs={2} sx={{ pr: 2 }}>
          <Typography variant="h5" color="#265B67">
            <ShutterSpeedIcon sx={{ mr: 1 }} />
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
              Injection Site: {data.injectionSite}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" color="#333333">
              {data.handInjection ? (
                <Chip
                  label="Hand Injection"
                  color="error"
                  icon={<SwipeUpIcon />}
                />
              ) : (
                <></>
              )}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" color="#333333">
              {data.mixedContrast ? (
                <Chip color="error" label="Mixed Contrast" />
              ) : (
                <></>
              )}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" color="#333333">
              Agent: {data.contrastType}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" color="#333333">
              {data.rate ? <>Rate: {data.rate} ml/s</> : <></>}
              {/* there will not be data for Hand injection, therefore if statement used */}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" color="#333333">
              Volume: {data.volume} ml
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="h6" color="#333333">
              {data.directPostContrast ? (
                <Chip label="Direct Post Contrast" color="success" />
              ) : (
                <Chip label="With Plain Scan" color="primary" />
              )}
            </Typography>
          </Grid>
          {data.ttp ? (
            <Grid item xs={4}>
              <Typography variant="h6" color="#333333">
                Time to peak: {data.ttp} s
              </Typography>
            </Grid>
          ) : (
            <></>
          )}

          <Grid item xs={4}>
            <Typography variant="h6" color="#333333">
              Delays:
              {data.delays ? (
                <>
                  {Object.values(data.delays).map((value, index) => {
                    return (
                      <Chip
                        key={index}
                        label={`${value}s`}
                        color="primary"
                        sx={{ mx: 1 }}
                      ></Chip>
                    );
                  })}
                </>
              ) : (
                <> no record</>
              )}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
}

export default ContrastDetail;
