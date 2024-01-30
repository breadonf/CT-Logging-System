import { Button, Box, Chip, Grid, Typography } from "@mui/material";

import React from "react";
import Select from "../../FormsUI/Select";
import Textfield from "../../FormsUI/Textfield";
import TimerIcon from "@mui/icons-material/Timer";
import Toggle from "../../FormsUI/Toggle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function InjectionRegime({ formik }) {
  const [injections, setInjections] = React.useState(2);
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
            <TimerIcon sx={{ mr: 1 }} />
            Injection Regime
          </Typography>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={3} sx={{ mt: 2 }}></Grid>
          <Grid item xs={3} sx={{ mt: 2 }}>
            <Typography>Strength</Typography>
          </Grid>
          <Grid item xs={3} sx={{ mt: 2 }}>
            <Typography>Volume(ml)</Typography>
          </Grid>
          <Grid item xs={3} sx={{ mt: 2 }}>
            <Typography>Rate(ml/s)</Typography>
          </Grid>
        </Grid>
      </Grid>
      {[...Array(injections)].map((values, i) => (
        <Grid
          key={i}
          item
          alignItems="center"
          justifyContent="center"
          container
          xs={12}
        >
          <Grid item xs={1} sx={{ mt: 2 }}>
            <Chip label={i + 1} />
          </Grid>
          <Grid item xs={3} sx={{ mt: 2 }}>
            <Select
              name={`injection[${i + 1}].strength`}
              label="Strength"
              options={{
                asdsad: "50%",
                asd123asd: "67%",
                bvsd: "75%",
                jiqofeq: "100%",
              }}
              SelectProps={{
                renderValue: (selected) => {
                  console.log(selected);
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
            <Textfield
              name={`phase[${i + 1}].volume`}
              label="Volume(ml)"
            ></Textfield>
          </Grid>
          <Grid item xs={3} sx={{ mt: 2 }}>
            <Textfield
              name={`phase[${i + 1}].rate`}
              label="Rate(ml/s)"
            ></Textfield>
          </Grid>
          <Grid item xs={1}>
            <Button
              type="button"
              disabled={injections == 3}
              onClick={() => {
                setInjections((prev) => prev + 1);
                formik.setFieldValue("phase", [
                  ...formik.values.phase,
                  { strength: undefined, volume: undefined, rate: undefined },
                ]);
              }}
            >
              <AddCircleIcon></AddCircleIcon>
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button
              type="button"
              disabled={injections < 2}
              onClick={() => {
                setInjections((prev) => prev - 1);
                formik.values.phase.pop();
              }}
            >
              <RemoveCircleIcon></RemoveCircleIcon>
            </Button>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default InjectionRegime;

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
