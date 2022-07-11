import React from "react";
import { Grid, Typography } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export function Remark(props) {
  return (
    <Grid
      container
      spacing={2}
      component={"div"}
      sx={{
        py: 3,
      }}
    >
      <Grid
        container
        sx={{
          py: 2,
          px: 2,
        }}
      >
        <Grid
          item
          xs={2}
          sx={{
            pb: 2,
          }}
        >
          <Typography variant="h6" color="#265B67">
            <BorderColorIcon
              sx={{
                mr: 1,
              }}
            />
            Keywords
          </Typography>
        </Grid>
        <Grid
          item
          xs={10}
          sx={{
            border: 1,
            borderRadius: 2,
            bgcolor: "#FFFFFF",
          }}
        >
          {props.CT_by_id.keywords}
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          pb: 2,
        }}
      >
        <Typography variant="h6" color="#265B67">
          <BorderColorIcon
            sx={{
              mr: 1,
            }}
          />
          Remarks
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          py: 3,
          mx: 2,
          border: 1,
          borderRadius: 2,
          bgcolor: "#FFFFFF",
        }}
      >
        {props.CT_by_id.remark}
      </Grid>
    </Grid>
  );
}
