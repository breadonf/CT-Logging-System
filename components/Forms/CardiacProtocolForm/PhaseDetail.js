import { Box, Chip, Grid, Typography } from "@mui/material";

import React from "react";
import Select from "../../FormsUI/Select";
import Textfield from "../../FormsUI/Textfield";
import TimerIcon from "@mui/icons-material/Timer";
import Toggle from "../../FormsUI/Toggle";

function PhaseDetail({ _formik }) {
  return (
    <Grid
      alignItems="center"
      justifyContent="center"
      container
      spacing={2}
      component={"div"}
      sx={{ py: 5 }}
    >
      <Grid alignItems="center" justifyContent="center" item container xs={12}>
        <Grid item xs={12}>
          <Typography variant="h5" color="#05668D">
            <TimerIcon sx={{ mr: 1 }} /> Phase Detail
          </Typography>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={1} sx={{ mt: 2 }}></Grid>
          <Grid item xs={2} sx={{ mt: 2 }}>
            <Typography>Phase</Typography>
          </Grid>
          <Grid item xs={3} sx={{ mt: 2 }}>
            <Typography>Processing</Typography>
          </Grid>
          <Grid item xs={3} sx={{ mt: 2 }}>
            <Typography>Scan Range</Typography>
          </Grid>
          <Grid item xs={3} sx={{ mt: 2 }}>
            <Typography>Remark</Typography>
          </Grid>
        </Grid>
        <Grid item xs={1} sx={{ mt: 2 }}>
          <Chip label={1} />
        </Grid>
        <Grid item xs={2} sx={{ mt: 2 }}>
          <Typography variant="body1" color="#05668D">
            Plain
          </Typography>
        </Grid>
        <Grid item xs={3} sx={{ mt: 2 }}>
          <Toggle name="phase[0].processing.caScore" label="CaScore Table" />
        </Grid>
        <Grid item xs={3} sx={{ mt: 2 }}>
          <Select
            name="phase[0].scanRange"
            label="Scan Range"
            options={{
              Heart: "Heart",
              WholeThorax: "Whole Thorax",
            }}
          />
        </Grid>
        <Grid item xs={3} sx={{ mt: 2 }}>
          <Textfield name="phase[0].remark" label="Remark" />
        </Grid>
      </Grid>
      {[...Array(3)].map((values, i) => (
        <Grid
          key={i}
          item
          alignItems="center"
          justifyContent="center"
          container
          xs={12}
        >
          <Grid item xs={1} sx={{ mt: 2 }}>
            <Chip label={i + 2} />
          </Grid>
          <Grid item xs={2} sx={{ mt: 2 }}>
            <Select
              name={`phase[${i + 1}].name`}
              label="Phase"
              multiple
              options={{
                directVen: "Direct Ven",
                pulmonaryArtery: "Pulmonary Artery",
                pulmonaryVein: "Pulmonary Vein",
                coronaries: "Coronaries",
                aorta: "Aorta",
                systemicVein: "Systemic Vein",
              }}
              SelectProps={{
                multiple: true,
                renderValue: (selected) => {
                  return (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  );
                },
              }}
            />
          </Grid>
          <Grid item xs={3} sx={{ mt: 2 }}>
            <Select
              name={`phase[${i + 1}].processing`}
              label="Processing"
              SelectProps={{ multiple: true }}
              grouped
              options={GROUPED_OPTIONS_PROCESSING}
            />
          </Grid>
          <Grid item xs={3} sx={{ mt: 2 }}>
            <Select
              name={`phase[${i + 1}].scanRange`}
              label="Scan Range"
              options={SCAN_RANGE_OPTIONS}
            />
          </Grid>
          <Grid item xs={3} sx={{ mt: 2 }}>
            <Textfield name={`phase[${i + 1}].remark`} label="Remark" />
          </Grid>
        </Grid>
      ))}
      <Grid item xs={12} sx={{ mt: 2 }}>
        <Toggle name="readyForRecord" label="Ready for post-data capture?" />
      </Grid>
    </Grid>
  );
}

export default PhaseDetail;

const GROUPED_OPTIONS_PROCESSING = [
  {
    groupId: 1,
    name: "Pulmonary arteries",
    roi: [
      {
        id: 1,
        name: "Volume Rendering(VR)",
      },
      {
        id: 2,
        name: "Centerline probing(CL)",
      },
    ],
  },
  {
    groupId: 2,
    name: "Coronaries",
    roi: [
      {
        id: 3,
        name: "Volumetric rendering(VR)",
      },
      {
        id: 4,
        name: "Centerline probing(CL)",
      },
      {
        id: 5,
        name: "Curved Multiplanar Reformatting(cMPR)",
      },
    ],
  },
  {
    groupId: 3,
    name: "Aorta",
    roi: [
      {
        id: 6,
        name: "Volumetric rendering(VR)",
      },
    ],
  },
];

const SCAN_RANGE_OPTIONS = {
  1: "Heart/Coronaries only",
  2: "PA + Heart",
  3: "Aortic Arch + Heart",
  4: "Whole Thorax",
};
