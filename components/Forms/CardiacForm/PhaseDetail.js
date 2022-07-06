import React from "react";
import { Grid, Typography, Chip, Button, Divider, Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Textfield from "../../FormsUI/Textfield";
import Select from "../../FormsUI/Select";
import Checkbox from "../../FormsUI/Checkbox";
import RadioGroup from "../../FormsUI/RadioGroup";
import Toggle from "../../FormsUI/Toggle";
import TimerIcon from "@mui/icons-material/Timer";
import Slider from "../../FormsUI/Slider";

function PhaseDetail({ formik }) {
  return (
    <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <Typography variant="h5" color="#05668D">
            <TimerIcon sx={{ mr: 1 }} /> Phase Detail
          </Typography>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={1} sx={{ mt: 2 }}></Grid>
          <Grid item xs={4} sx={{ mt: 2 }}>
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
        <Grid item xs={4} sx={{ mt: 2 }}>
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
              WholeThroax: "Whole Thorax",
            }}
          />
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={1} sx={{ mt: 2 }}>
          <Chip label={2} />
        </Grid>
        <Grid item xs={4} sx={{ mt: 2 }}>
          <Select
            name="phase[1].name"
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
              native: true,
              renderValue: (selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3} sx={{ mt: 2 }}>
          <Select
            name="phase[1].processing"
            label="Processing"
            options={{
              Heart: "Heart",
              WholeThroax: "Whole Thorax",
            }}
          />
        </Grid>
        <Grid item xs={3} sx={{ mt: 2 }}>
          <Select
            name="phase[1].scanrange"
            label="Scan Range"
            options={{
              Heart: "Heart",
              WholeThroax: "Whole Thorax",
            }}
          />
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={1} sx={{ mt: 2 }}>
          <Chip label={2} />
        </Grid>
        <Grid item xs={4} sx={{ mt: 2 }}>
          <Select
            name="phase[2].name"
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
              native: true,
              renderValue: (selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3} sx={{ mt: 2 }}>
          <Select
            name="phase[2].processing"
            label="Processing"
            options={{
              Heart: "Heart",
              WholeThroax: "Whole Thorax",
            }}
          />
        </Grid>
        <Grid item xs={3} sx={{ mt: 2 }}>
          <Select
            name="phase[2].scanrange"
            label="Scan Range"
            options={{
              Heart: "Heart",
              WholeThroax: "Whole Thorax",
            }}
          />
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={1} sx={{ mt: 2 }}>
          <Chip label={2} />
        </Grid>
        <Grid item xs={4} sx={{ mt: 2 }}>
          <Select
            name="phase[3].name"
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
              native: true,
              renderValue: (selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3} sx={{ mt: 2 }}>
          <Select
            name="phase[3].processing"
            label="Processing"
            options={{
              Heart: "Heart",
              WholeThroax: "Whole Thorax",
            }}
          />
        </Grid>
        <Grid item xs={3} sx={{ mt: 2 }}>
          <Select
            name="phase[3].scanrange"
            label="Scan Range"
            options={{
              Heart: "Heart",
              WholeThroax: "Whole Thorax",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PhaseDetail;
