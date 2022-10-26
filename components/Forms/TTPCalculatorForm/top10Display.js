import React from "react";
import { Grid, Box, Typography, Chip, Button } from "@mui/material";
import Router from "next/router";

function Top10Display({ top10Values }) {
  return (
    <Box
      sx={{
        backgroundColor: "#EEEEEE",
        p: 1,
        mx: 2,
        my: 1,
        borderRadius: 5,
        border: 1,
      }}
    >
      <Grid item xs={12} sx={{ pt: 2 }}>
        <Typography variant={"h6"} textAlign="center">
          Top10 Result
        </Typography>
      </Grid>
      {Object.values(top10Values).map((value, index) => {
        return (
          <div key={index}>
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundColor: "white",
                  m: 1,
                  p: 1,
                  border: 1,
                  borderRadius: 5,
                }}
              >
                <Grid container alignItems="center" justifyContent="center">
                  <Grid item xs={4}>
                    <Typography>Rate: {value.rate} ml/s</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>Weight: {value.weight} kg</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Chip
                      label={`Time to Peak: ${value.ttp} s`}
                      variant="outlined"
                    ></Chip>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Discrepancy: {value.distance}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      onClick={() => Router.push(`../../exam/${value.count}`)}
                    >
                      Detail
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </div>
        );
      })}
    </Box>
  );
}

export default Top10Display;
