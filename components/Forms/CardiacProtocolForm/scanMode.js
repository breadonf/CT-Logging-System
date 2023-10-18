import { Divider, Grid, Typography } from "@mui/material";

import AutocompleteWrapper from "~/components/FormsUI/AutocompleteWrapper";
import RadioGroup from "../../FormsUI/RadioGroup";
import React from "react";
import Slider from "../../FormsUI/Slider";
import TimerIcon from "@mui/icons-material/Timer";
import Toggle from "../../FormsUI/Toggle";

function ScanMode({ formik, autocompleteOptions, data, isSuccess }) {
  return (
    <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
      <Divider />
      <Grid item xs={12}>
        <Typography variant="h5" color="#05668D">
          <TimerIcon sx={{ mr: 1 }} /> ECG-gated Scan Mode
        </Typography>
      </Grid>
      <Grid item xs={4} sx={{ mt: 2 }}>
        <Toggle
          name="scanMode.HRDependent"
          legend="Heart Rate Dependent?"
          label=""
        />
        {formik.values.scanMode.HRDependent ? (
          <Typography variant="body1" color="#05668D">
            Priority (Flash =&gt SS =&gt Retro)
          </Typography>
        ) : (
          <></>
        )}
      </Grid>

      <Grid container item xs={8} sx={{ mt: 2 }}>
        <Grid item xs={6}>
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
        <Grid item xs={6}>
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
        <Grid item xs={4}>
          <Toggle name="scanMode.ss.status" legend="SS" label="" />
        </Grid>
        {formik.values.scanMode.ss.status ? (
          <Grid item xs={8} sx={{ mt: 2 }}>
            <Slider label="SS range" name="scanMode.ss.range" legend="Range" />
          </Grid>
        ) : (
          <></>
        )}
      </Grid>

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
        <Grid item xs={4}>
          <AutocompleteWrapper
            name="scanMode.ROI"
            label="ROI Location"
            autocompleteOptions={isSuccess ? autocompleteOptions.ROI : []}
            prepopulatedvalue={data?.scanMode.ROI ?? []}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ScanMode;
