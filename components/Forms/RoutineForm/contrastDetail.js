import { Button, Divider, Grid, Switch, Typography } from "@mui/material";
import { FieldArray, Formik } from "formik";

import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import AutocompleteWrapper from "../../FormsUI/AutocompleteWrapper";
import Checkbox from "../../FormsUI/Checkbox";
import GetTop10Wrapper from "./GetTop10Wrapper";
import RadioGroup from "../../FormsUI/RadioGroup";
import React from "react";
import { RecordTableHeaders } from "~/components/Table/CardiacRecordNewHeader";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import Select from "../../FormsUI/Select";
import { SettingsInputComponent } from "@mui/icons-material";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import Textfield from "../../FormsUI/Textfield";
import injectionSites from "../SelectItems/injectionSites.json";
import typeOfContrast from "../SelectItems/typeOfContrast.json";

function ContrastDetail({ formik, data, contrast, handleSwitch, records }) {
  return (
    <Grid container spacing={2} component={"div"} sx={{ py: 4 }}>
      <Grid item xs={12}>
        <Typography variant="h5" color="#05668D">
          <ShutterSpeedIcon sx={{ mr: 1 }} />
          Contrast Study?
          <Switch checked={contrast} onChange={handleSwitch} />
        </Typography>
      </Grid>
      <>
        {contrast && (
          <>
            <Grid item xs={4} container>
              <Grid item xs={12} paddingY={1}>
                <AutocompleteWrapper
                  name="injectionSite"
                  label="Injection Site"
                  autocompleteOptions={injectionSites}
                  prepopulatedvalue={data?.injectionSite ?? []}
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  name="contrastType"
                  label="Type of Contrast"
                  options={typeOfContrast}
                />
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Checkbox
                label="Yes"
                name="handInjection"
                legend="Hand Injection"
              />
            </Grid>
            <Grid item xs={3}>
              <RadioGroup
                name="directPostContrast"
                legend="Pre Contrast Done"
                options={[
                  { label: "Yes", value: false },
                  { label: "No", value: true },
                ]}
              />
            </Grid>
            <Grid item xs={3}>
              <Checkbox label="Yes" name="mixedContrast" legend="Split Bolus" />
            </Grid>

            <Grid item xs={4}>
              <Textfield name="rate" label="Injection Rate(ml/s)"></Textfield>
            </Grid>
            <Grid item xs={4}>
              <Textfield name="volume" label="Contrast Volume(ml)"></Textfield>
            </Grid>
            <GetTop10Wrapper formik={formik} records={records} />
            <Grid
              item
              xs={4}
              sx={{
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: 16, fontWeight: "Bold" }}
                color="#05668D"
              >
                Delay Time (s): 0 = Start of Contrast Injection (Maximum 5
                input)
              </Typography>
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
                                label={`Delay Time(s) ${index + 1}`}
                              />
                            </Grid>
                            <>
                              {delays.length < 5 ? (
                                <Grid item xs={2} sx={{ pb: 2 }}>
                                  <Button
                                    type="button"
                                    onClick={() => push(index)}
                                  >
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
            <Grid container spacing={2} component="div" sx={{ py: 3, px: 2 }}>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: 16,
                    fontWeight: "Bold",
                  }}
                  color="#05668D"
                >
                  Please Enter Time to Peak * 150 HU * for Bolus Tracking/Timing
                  Bolus cases
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Textfield name="ttp" label="Time to 150 HU(s)"></Textfield>
              </Grid>
            </Grid>
          </>
        )}
      </>
    </Grid>
  );
}

export default ContrastDetail;
