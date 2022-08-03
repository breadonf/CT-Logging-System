import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import Textfield from "../../FormsUI/Textfield";
import RadioGroup from "../../FormsUI/RadioGroup";
import Toggle from "../../FormsUI/Toggle";
import TimerIcon from "@mui/icons-material/Timer";
import Slider from "../../FormsUI/Slider";
import AutocompleteWrapper from "/components/FormsUI/AutocompleteWrapper";
import RatingWrapper from "../../FormsUI/Rating";

function ScanMode({ formik, isSuccess, data, autocompleteOptions }) {
  return (
    <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
      <Grid item xs={12}>
        <Typography variant="h5" color="#05668D">
          <TimerIcon sx={{ mr: 1 }} />
          Contrast and Scan Detail
        </Typography>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <AutocompleteWrapper
          multiple
          id="protocol"
          name="protocol"
          label="Protocol (Maximum 2 protcols can be selected)"
          prepopulatedValue={data?.protocol ?? []}
          autocompleteOptions={
            isSuccess ? autocompleteOptions?.protocol ?? [] : ""
          }
        />
      </Grid>
      <Grid item xs={12}>
        <Textfield name="contrastRegime" label="Contrast Regime" />
        {/** Need to discuss for better UI */}
      </Grid>
      <Grid item xs={4}>
        <Textfield name="studyDose" label="Study Dose(mSv)" />
      </Grid>
      <Grid item xs={4}>
        <Textfield name="seriesDose" label="Series Dose(mSv)" />
      </Grid>
      <Grid item xs={4}>
        <Textfield name="seriesCTDI" label="Series CTDI" />
      </Grid>
      <Grid container item spacing={1} xs={12}>
        <Grid item xs={12}>
          <Typography sx={{}} variant="h6" color="#05668D">
            Heart Rate
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={3}>
          <Textfield name="hearRate.min" label="Min" />
        </Grid>
        <Grid item xs={3}>
          <Textfield name="hearRate.max" label="Max" />
        </Grid>
        <Grid item xs={3}>
          <Textfield name="hearRate.average" label="Average" />
        </Grid>
        <Grid item xs={3}>
          <Textfield name="hearRate.variance" label="Variance" />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>

      <Grid container item xs={12} spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={6}>
          <RadioGroup
            name="scanTechnique"
            legend="Scan Technique"
            options={[
              { label: "Flash", value: "Flash" },
              { label: "Double Flash", value: "DoubleFlash" },
              { label: "Prospective", value: "Prospective" },
              { label: "Retrospective", value: "Retrospective" },
            ]}
          />
        </Grid>
        <Grid item xs={6}>
          <RadioGroup
            name="breathingControl"
            legend="Breathing Control"
            options={[
              { label: "Manual", value: "Manual" },
              { label: "Free", value: "Free" },
              { label: "Auto", value: "Auto" },
              { label: "GA", value: "GA" },
            ]}
          />
        </Grid>

        <Grid item xs={4}>
          <Textfield
            name="depictionOfROI"
            label="Depiction Structures of Interest"
          />
        </Grid>
        <Grid item xs={4}>
          <Textfield
            name="depictionOfROI"
            label="Depiction Structures of Interest"
          />
        </Grid>
        <Grid item xs={4}>
          <RatingWrapper name="satisfaction" legend="Satisfaction Level" />
        </Grid>
        <Grid item xs={4}>
          <Textfield name="artefact" label="Artefact" />
        </Grid>
        <Grid item xs={4}>
          <Textfield name="remarks" label="Remarks" />
        </Grid>
        <Grid item xs={4}>
          <Textfield name="delayTime" label="Delay Time" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ScanMode;
