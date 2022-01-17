import React from "react";
import { Formik, Form } from "formik";
import INITIAL_FORM_STATE from "./InitialFormState";
import FORM_VALIDATION from "./ValidationSchema";
import {
  Container,
  Paper,
  Grid,
  Typography,
  Button,
  Autocomplete,
  TextField,
} from "@mui/material";
import SickIcon from "@mui/icons-material/Sick";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import Textfield from "../../FormsUI/Textfield";
import Select from "../../FormsUI/Select";
import DateTimePicker from "../../FormsUI/DateTimePicker";
import Checkbox from "../../FormsUI/Checkbox";
import protocolName from "../SelectItems/protocolName.json";
import protocolData from "../SelectItems/protocolTest";
import injectionSites from "../SelectItems/injectionSites.json";
import { FormControlLabel } from "@mui/material";

function RoutineForm() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <Grid container spacing={2} sx={{ py: 5 }}>
                <Grid item xs={12}>
                  <Paper
                    elevation={12}
                    sx={{ px: 3, py: 5, bgcolor: "#F0F3BD" }}
                  >
                    <Grid item xs={12}>
                      <Typography variant="h3" align="center" color="#093A3E">
                        Routine Case Log Form
                      </Typography>
                    </Grid>

                    {/* Patient Details */}
                    <Grid
                      container
                      spacing={2}
                      component={"div"}
                      sx={{ py: 5 }}
                    >
                      <Grid item xs={12}>
                        <Typography variant="h5" color="#05668D">
                          <SickIcon sx={{ mr: 1 }} /> Patient Details
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Textfield
                          name="PID"
                          label="Patient ID (e.g. A1234567)"
                        ></Textfield>
                      </Grid>
                      <Grid item xs={3}>
                        <Textfield name="age" label="Age (years)"></Textfield>
                      </Grid>
                      <Grid item xs={3}>
                        <Checkbox
                          name="inPatient"
                          legend="In patient?"
                          label="Yes"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Textfield name="height" label="Height(cm)"></Textfield>
                      </Grid>
                      <Grid item xs={4}>
                        <Textfield name="weight" label="Weight(kg)"></Textfield>
                      </Grid>
                      <Grid item xs={4}>
                        <Textfield
                          name="circumference"
                          label="Circumference(cm)"
                        ></Textfield>
                      </Grid>
                    </Grid>

                    {/* Exam Details */}
                    <Grid
                      container
                      spacing={2}
                      component={"div"}
                      sx={{ py: 5 }}
                    >
                      <Grid item xs={12}>
                        <Typography variant="h5" color="#05668D">
                          <ImageSearchIcon sx={{ mr: 1 }} />
                          Exam Details
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <DateTimePicker name="date" label="Exam Date" />
                      </Grid>
                      <Grid item xs={3}>
                        <Checkbox
                          label="Yes"
                          name="urgent"
                          legend="Urgent?"
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Checkbox
                          label="Yes"
                          name="sedation"
                          legend="Sedation"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Select
                          name="protocol"
                          label="Exam Protocol"
                          options={protocolName}
                        ></Select>
                      </Grid>
                      {/* 
                      <Grid item xs={12}>
                        <Autocomplete
                          id="test"
                          name="protocoltest"
                          options={protocolData}
                          fullWidth
                          getOptionLabel={(protocolData) => `${protocolData?.protocol}`}
                          renderInput={(params) => {
                            return (
                              <TextField
                                {...params}
                                variant="filled"
                                label="Protocol Test"
                              />
                            );
                          }}
                          renderOption={(option) => {
                            return <h4>{`${option.protocol}`}</h4>;
                          }}
                        ></Autocomplete>
                      </Grid> */}
                      <Grid item xs={4}>
                        <Textfield name="kV_A" label="kV (Tube A)"></Textfield>
                      </Grid>
                      <Grid item xs={4}>
                        <Textfield name="kV_B" label="kV (Tube B)"></Textfield>
                      </Grid>
                      <Grid item xs={4}>
                        <Textfield name="pitch" label="Pitch"></Textfield>
                      </Grid>
                    </Grid>

                    {/* Contrast Details */}
                    <Grid
                      container
                      spacing={2}
                      component={"div"}
                      sx={{ py: 5 }}
                    >
                      <Grid item xs={12}>
                        <Typography variant="h5" color="#05668D">
                          <ShutterSpeedIcon sx={{ mr: 1 }} />
                          Contrast Details
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Select
                          name="route"
                          label="Injection Site"
                          options={injectionSites}
                        ></Select>
                      </Grid>
                      <Grid item xs={3}>
                        <Checkbox
                          label="Yes"
                          name="handInjection"
                          legend="Hand Injection"
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Checkbox
                          label="Yes"
                          name="mixedContrast"
                          legend="Mixed Contrast"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Textfield
                          name="type"
                          label="Type of Contrast"
                        ></Textfield>
                      </Grid>
                      <Grid item xs={4}>
                        <Textfield
                          name="rate"
                          label="Injection Rate(ml/s)"
                        ></Textfield>
                      </Grid>
                      <Grid item xs={4}>
                        <Textfield
                          name="volume"
                          label="Contrast Volume(ml)"
                        ></Textfield>
                      </Grid>

                      <Grid item xs={2}>
                        <Checkbox
                          name="pre"
                          label="Pre Con"
                          legend="Pre Con"
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <Textfield
                          name="delay1"
                          label="Delay Time 1(s)"
                        ></Textfield>
                      </Grid>
                      <Grid item xs={2}>
                        <Textfield
                          name="delay2"
                          label="Delay Time 2(s)"
                        ></Textfield>
                      </Grid>
                      <Grid item xs={2}>
                        <Textfield
                          name="delay3"
                          label="Delay Time 3(s)"
                        ></Textfield>
                      </Grid>
                      <Grid item xs={2}>
                        <Textfield
                          name="delay4"
                          label="Delay Time 4(s)"
                        ></Textfield>
                      </Grid>
                    </Grid>

                    {/* Staff Details */}
                    <Grid
                      container
                      spacing={2}
                      component={"div"}
                      sx={{ py: 5 }}
                    >
                      <Grid item xs={12}>
                        <Typography variant="h5" color="#05668D">
                          <AirlineSeatReclineExtraIcon sx={{ mr: 1 }} />
                          Staff Details
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Textfield name="pher" label="Radiographer"></Textfield>
                      </Grid>
                      <Grid item xs={4}>
                        <Textfield name="gist" label="Radiologist"></Textfield>
                      </Grid>
                      <Grid item xs={4}>
                        <Textfield name="nurse" label="Nurse"></Textfield>
                      </Grid>
                    </Grid>

                    {/* Remarks */}
                    <Grid
                      container
                      spacing={2}
                      component={"div"}
                      sx={{ py: 5 }}
                    >
                      <Grid item>
                        <Typography variant="h5" color="#05668D">
                          <BorderColorIcon sx={{ mr: 1 }} />
                          Remarks
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Textfield
                          multiline
                          rows={4}
                          name="remark"
                          label="Anything you would like to add"
                        />
                      </Grid>
                    </Grid>

                    {/* Buttons */}
                    <Grid
                      container
                      spacing={2}
                      component={"div"}
                      sx={{ py: 4, justifyContent: "center" }}
                    >
                      <Grid item xs={4}>
                        <Button
                          variant="contained"
                          type="submit"
                          value="Submit"
                          fullWidth
                        >
                          Submit
                        </Button>
                      </Grid>
                      <Grid item xs={4}>
                        <Button
                          variant="contained"
                          type="reset"
                          value="Reset"
                          fullWidth
                        >
                          Reset
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Container>
      </Grid>
    </Grid>
  );
}

export default RoutineForm;
