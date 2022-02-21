/**
 * Dependencies Import
 */
import React from "react";
import { useField, useFormikContext, Formik, Form } from "formik";
import {
  Container,
  Paper,
  Grid,
  Typography,
  Button,
  Autocomplete,
  MenuItem,
} from "@mui/material";
import SickIcon from "@mui/icons-material/Sick";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import { FormControlLabel } from "@mui/material";
import { useQuery } from "react-query";
/**
 * FormUI component Import
 */
import Textfield from "../../FormsUI/Textfield";
import Select from "../../FormsUI/Select";
import DateTimePicker from "../../FormsUI/DateTimePicker";
import Checkbox from "../../FormsUI/Checkbox";
import SubmitButton from "../../FormsUI/SubmitButton";
import AutocompleteWrapper from "../../FormsUI/AutocompleteWrapper";

/**
 * Data Import
 */
import typeOfContrast from "../SelectItems/typeOfContrast.json";
import injectionSites from "../SelectItems/injectionSites.json";
import INITIAL_FORM_STATE from "./InitialFormState";
import FORM_VALIDATION from "./ValidationSchema";

/**
 * Queries Import
 */
import { getHomepageData } from "../../../queries/queries";

function RoutineForm() {
  const handleSubmit = (values, { setSubmitting, setFieldValue }) => {
    const toDate = (dateStr) => {
      const [year, month, day] = dateStr.split("-");
      return new Date(year, month - 1, day);
    };
    const converted = toDate(values.date);
    setTimeout(() => {
      setFieldValue("date", converted);
      // Submission
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);

    console.log(values);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
  };
  const { data: autocompleteOptions, isSuccess } = useQuery(
    "autocompleteOptions",
    async () => await getHomepageData()
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={handleSubmit}
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
                        <Checkbox label="Yes" name="urgent" legend="Urgent?" />
                      </Grid>
                      <Grid item xs={3}>
                        <Checkbox
                          label="Yes"
                          name="sedation"
                          legend="Sedation"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <AutocompleteWrapper
                          multiple
                          id="protocol"
                          name="protocol"
                          label="Protocol"
                          autocompleteOptions={
                            isSuccess ? autocompleteOptions.protocol : []
                          }
                        ></AutocompleteWrapper>
                      </Grid>
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
                        <Select
                          name="type"
                          label="Type of Contrast"
                          options={typeOfContrast}
                        ></Select>
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
                          name="directPost"
                          label="Yes"
                          legend="Direct Post Con?"
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <Textfield
                          name="ttp"
                          label="Time to Peak(s)"
                        ></Textfield>
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
                      {/* 
                      <FieldArray name="delays">
                        {({push, remove, }) => (
                          <>
                          <Grid item>
                            <Typography variant="body2">All Phases and Delay Time</Typography>
                          </Grid>
                          {values.delays.map((_, index) => (
                            <Grid container>
                                <Grid item sx={2}>
                                  <Textfield name={`delays.${index}`.phase}></Textfield>
                                </Grid>
                                <Grid item sx={2}>
                                  <Textfield name={`delays.${index}`.delayTime}></Textfield>
                                </Grid>
                            </Grid>
                          ))}
                          </>
                        )}
                      </FieldArray>*/}
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
                        <AutocompleteWrapper
                          multiple
                          id="radiographers"
                          name="radiographers"
                          label="Radiographer"
                          autocompleteOptions={
                            isSuccess ? autocompleteOptions.radiographers : []
                          }
                        ></AutocompleteWrapper>
                      </Grid>
                      <Grid item xs={4}>
                        <AutocompleteWrapper
                          multiple
                          id="radiologists"
                          name="radiologists"
                          label="Radiologist"
                          autocompleteOptions={
                            isSuccess ? autocompleteOptions.radiologists : []
                          }
                        ></AutocompleteWrapper>
                      </Grid>
                      <Grid item xs={4}>
                        <AutocompleteWrapper
                          multiple
                          id="nurses"
                          name="nurses"
                          label="Nurses"
                          autocompleteOptions={
                            isSuccess ? autocompleteOptions.nurses : []
                          }
                        ></AutocompleteWrapper>
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
                          Keywords
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Textfield
                          rows={4}
                          name="keywords"
                          label="Keywords for the case"
                        />
                      </Grid>
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
                          onClick={Formik.resetForm}
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
