import React from "react";
import { Grid, Typography, Chip, Button, Divider, Radio } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Textfield from "../../FormsUI/Textfield";
import Select from "../../FormsUI/Select";
import Checkbox from "../../FormsUI/Checkbox";
import RadioGroup from "../../FormsUI/RadioGroup";
import Toggle from "../../FormsUI/Toggle";
import TimerIcon from "@mui/icons-material/Timer";
import Slider from "../../FormsUI/Slider";
function ScanMode({ formik, numberOfSites, setNumberOfSites }) {
  return (
    <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
      <Divider />
      <Grid item xs={12}>
        <Typography variant="h5" color="#05668D">
          <TimerIcon sx={{ mr: 1 }} /> ECG-gated Scan Mode
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <Toggle
          name="scanMode.HRDependent"
          legend="Heart Rate Dependent?"
          label=""
        />
        {formik.values.scanMode.HRDependent ? (
          <Typography variant="body1" color="#05668D">
            Priority (Flash => SS => Retro)
          </Typography>
        ) : (
          <></>
        )}
      </Grid>

      <Grid container item xs={12} sx={{ mt: 2 }}>
        <Grid item xs={4}>
          <RadioGroup
            name="scanMode.flash.mode"
            legend="Flash(Single/Dual)"
            options={[
              { label: "", value: "" },
              { label: "Single", value: "single" },
              { label: "Dual", value: "dual" },
            ]}
          />
        </Grid>
        <Grid item xs={4}>
          {formik.values.scanMode.flash.mode === "single" ? (
            <RadioGroup
              name="scanMode.flash.trigger"
              legend="Trigger"
              options={[
                { label: "30%", value: "30%" },
                { label: "65%", value: "65%" },
              ]}
            />
          ) : (
            <></>
          )}
        </Grid>
      </Grid>

      <Grid item xs={12} sx={{ mt: 2 }}>
        <Toggle name="scanMode.ss.status" legend="SS" label="" />
      </Grid>
      {formik.values.scanMode.ss.status ? (
        <Grid item xs={4} sx={{ mt: 2 }}>
          <Slider label="SS range" name="scanMode.ss.range" legend="Range" />
        </Grid>
      ) : (
        <></>
      )}
      <Grid container item xs={12} sx={{ mt: 2 }}>
        <Grid item xs={4}>
          <RadioGroup
            name="scanMode.monitoringMethod"
            legend="Monitoring Method"
            options={[
              { label: "Manual", value: "Manual" },
              { label: "Auto", value: "Auto" },
              { label: "Test Bolus", value: "TestBolus" },
            ]}
          />
        </Grid>
        <Grid item xs={2} sx={{ mt: 2 }}>
          <Textfield name="scanMode.ROI" label="ROI" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ScanMode;
