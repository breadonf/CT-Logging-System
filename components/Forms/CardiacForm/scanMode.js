import { Divider, Grid, Typography } from "@mui/material";

import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import AutocompleteWrapper from "~/components/FormsUI/AutocompleteWrapper";
import Button from "@mui/material/Button";
import { FieldArray } from "formik";
import RadioGroup from "../../FormsUI/RadioGroup";
import RatingWrapper from "../../FormsUI/Rating";
import React from "react";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import Textfield from "../../FormsUI/Textfield";
import TimerIcon from "@mui/icons-material/Timer";

function ScanMode({ isSuccess, data, autocompleteOptions }) {
  return (
    <Grid container spacing={2} component={"div"} sx={{ p: 2 }}>
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
          prepopulatedvalue={data?.protocol ?? []}
          autocompleteOptions={isSuccess ? autocompleteOptions?.protocol : []}
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
          <Textfield name="heartRate.min" label="Min" />
        </Grid>
        <Grid item xs={3}>
          <Textfield name="heartRate.max" label="Max" />
        </Grid>
        <Grid item xs={3}>
          <Textfield name="heartRate.average" label="Average" />
        </Grid>
        <Grid item xs={3}>
          <Textfield name="heartRate.variance" label="Variance" />
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
            name="breathingControl_record"
            legend="Breathing Control"
            options={[
              { label: "Manual", value: "Manual" },
              { label: "Free", value: "Free" },
              { label: "Auto", value: "Auto" },
              { label: "GA", value: "GA" },
            ]}
          />
        </Grid>

        <Grid item xs={12}>
          <Textfield
            name="depictionOfROI"
            label="Depiction Structures of Interest"
          />
        </Grid>
        <Grid item xs={12}>
          <RatingWrapper name="satisfaction" legend="Satisfaction Level" />
        </Grid>
        <Grid item xs={4}>
          <Textfield name="artefact" label="Artefact" />
        </Grid>
        <Grid item xs={4}>
          <Textfield name="remarks" label="Remarks" />
        </Grid>
        <Grid item xs={5.92}>
          <FieldArray name="delays">
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              let { values } = form;
              let { delays } = values;
              !delays ? (delays = [""]) : delays;
              return (
                <div>
                  {delays?.map((delay, index) => (
                    <div key={index}>
                      <Grid container alignItems="center">
                        <Grid item xs={8} sx={{ pb: 2 }}>
                          <Textfield
                            name={`delays[${index}]`}
                            label={` ${index + 1}. Delay Time(s)`}
                          />
                        </Grid>
                        <>
                          {delays.length < 5 ? (
                            <Grid item xs={2} sx={{ pb: 2 }}>
                              <Button type="button" onClick={() => push(index)}>
                                <AddCircleOutlinedIcon />
                              </Button>
                            </Grid>
                          ) : (
                            <Grid item xs={2} sx={{ pb: 2 }}>
                              <Button
                                type="button"
                                disabled
                                onClick={() => push(index)}
                              >
                                <AddCircleOutlinedIcon />
                              </Button>
                            </Grid>
                          )}
                        </>
                        <>
                          {delays.length > 1 ? (
                            <Grid item xs={2} sx={{ pb: 2 }}>
                              <Button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                <RemoveCircleOutlinedIcon />
                              </Button>
                            </Grid>
                          ) : (
                            <Grid item xs={2} sx={{ pb: 2 }}>
                              <Button
                                type="button"
                                disabled
                                onClick={() => remove(index)}
                              >
                                <RemoveCircleOutlinedIcon />
                              </Button>
                            </Grid>
                          )}
                        </>
                      </Grid>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ScanMode;
