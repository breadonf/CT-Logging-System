import React from "react";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CancelIcon from "@mui/icons-material/Cancel";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import { Grid, Typography, Divider, Chip } from "@mui/material";

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
                <Chip label="Hand Injection" color="error" />
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
              Direct Post Con?:
              {data.directPostContrast ? (
                <CheckRoundedIcon sx={{ ml: 1 }} />
              ) : (
                <CancelIcon sx={{ ml: 1 }} />
              )}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" color="#333333">
              Time to peak:
              {data.ttp ? <>{data.ttp} s</> : <> N/A</>}
            </Typography>
          </Grid>
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
