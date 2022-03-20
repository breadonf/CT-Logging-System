/**
 * Dependencies Import
 */
import React from "react";
import {
  useField,
  useFormikContext,
  Formik,
  Form,
  FieldArray,
  Field,
} from "formik";
import {
  Container,
  Paper,
  Grid,
  Typography,
  Button,
  Autocomplete,
  MenuItem,
  Switch,
} from "@mui/material";
import SickIcon from "@mui/icons-material/Sick";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import { useQuery, useMutation } from "react-query";
/**
 * FormUI component Import
 */
import Textfield from "../../FormsUI/Textfield";
import Select from "../../FormsUI/Select";
import DateTimePicker from "../../FormsUI/DateTimePicker";
import Checkbox from "../../FormsUI/Checkbox";
import SubmitButton from "../../FormsUI/SubmitButton";
import AutocompleteWrapper from "../../FormsUI/AutocompleteWrapper";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
/**
 * Data Import
 */
import typeOfContrast from "../SelectItems/typeOfContrast.json";
import injectionSites from "../SelectItems/injectionSites.json";
import kV_a from "../SelectItems/kV_a.json";
import kV_b from "../SelectItems/kV_b.json";
import FORM_VALIDATION from "./ValidationSchema";
import examType from "../SelectItems/examType.json";

/**
 * Queries and helpers Import
 */
import { getHomepageData } from "../../../queries/queries";
import { createCTrecord } from "../../../queries/mutations";

function RoutineForm({ data, handleSubmit }) {
  const { data: autocompleteOptions, isSuccess } = useQuery(
    "autocompleteOptions",
    async () => await getHomepageData()
  );
  const [contrast, setContrast] = React.useState(false);

  const handleSwitch = (e) => {
    setContrast(e.target.checked);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <Formik
              initialValues={data}
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
                        <Grid item xs={4}>
                          <Textfield
                            name="PID"
                            label="Patient ID (e.g. A1234567)"
                          ></Textfield>
                        </Grid>
                        <Grid item xs={5}>
                          <Textfield
                            name="age"
                            label="Age (e.g. 3d => 3 days, 5m => 5 months, 12 => 12 years) "
                          ></Textfield>
                        </Grid>
                        <Grid item xs={3}>
                          <Checkbox
                            name="inPatient"
                            legend="In patient?"
                            label="Yes"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Textfield
                            name="height"
                            label="Height(cm)"
                          ></Textfield>
                        </Grid>
                        <Grid item xs={4}>
                          <Textfield
                            name="weight"
                            label="Weight(kg)"
                          ></Textfield>
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
                          <DateTimePicker
                            name="Date"
                            label="Exam Date"
                            prepopulatedValue={data.Date}
                          />
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
                            checked={data.sedation}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <AutocompleteWrapper
                            multiple={true}
                            id="protocol"
                            name="protocol"
                            label="Protocol"
                            prepopulatedValue={data.protocol}
                            autocompleteOptions={
                              isSuccess ? autocompleteOptions.protocol : []
                            }
                          ></AutocompleteWrapper>
                        </Grid>
                        <Grid item xs={4}>
                          <Select
                            name="examType"
                            label="Exam Type"
                            multiple
                            prepopulatedValue={data?.examType}
                            options={examType}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Select
                            name="kV_a"
                            label="kV (Tube A)"
                            options={kV_a}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Select
                            name="kV_b"
                            label="kV (Tube B)"
                            options={kV_b}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Textfield name="pitch" label="Pitch"></Textfield>
                        </Grid>
                        <Grid item xs={4}>
                          <Textfield name="ctdi" label="CTDI"></Textfield>
                        </Grid>
                      </Grid>

                      {/* Contrast Details */}
                      <Grid
                        container
                        spacing={2}
                        component={"div"}
                        sx={{ py: 4 }}
                      >
                        <Grid item xs={12}>
                          <Typography variant="h5" color="#05668D">
                            <ShutterSpeedIcon sx={{ mr: 1 }} />
                            Contrast Study?
                            <Switch
                              checked={contrast}
                              onChange={handleSwitch}
                            />
                          </Typography>
                        </Grid>
                        <>
                          {contrast && (
                            <>
                              <Grid item xs={6}>
                                <Select
                                  name="injectionSite"
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
                                  name="contrastType"
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

                              <Grid item xs={4}>
                                <Checkbox
                                  name="directPostContrast"
                                  label="Yes"
                                  legend="Direct Post Con?"
                                />
                              </Grid>
                              <Grid item xs={4}>
                                <Textfield
                                  name="ttp"
                                  label="Time to Peak"
                                ></Textfield>
                              </Grid>
                              <Grid item xs={4}>
                                <FieldArray name="delays">
                                  {(fieldArrayProps) => {
                                    const {
                                      push,
                                      remove,
                                      form,
                                    } = fieldArrayProps;
                                    const { values } = form;
                                    const { delays } = values;
                                    console.log("delays", delays);
                                    return (
                                      <div>
                                        {delays?.map((delay, index) => (
                                          <div key={index}>
                                            <Grid container alignItems="center">
                                              <Grid item xs={8} sx={{ pb: 2 }}>
                                                <Textfield
                                                  name={`delays[${index}]`}
                                                  label={`Delay Time ${
                                                    index + 1
                                                  }`}
                                                />
                                              </Grid>
                                              <Grid item xs={2} sx={{ pb: 2 }}>
                                                <Button
                                                  type="button"
                                                  onClick={() => push(index)}
                                                >
                                                  <AddCircleOutlinedIcon />
                                                </Button>
                                              </Grid>
                                              <>
                                                {delays.length > 1 && (
                                                  <Grid
                                                    item
                                                    xs={2}
                                                    sx={{ pb: 2 }}
                                                  >
                                                    <Button
                                                      type="button"
                                                      onClick={() =>
                                                        remove(index)
                                                      }
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
                            </>
                          )}
                        </>

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
                            multiple={true}
                            id="radiographers"
                            name="radiographers"
                            label="Radiographer"
                            prepopulatedValue={data.radiographers}
                            autocompleteOptions={
                              isSuccess ? autocompleteOptions.radiographers : []
                            }
                          ></AutocompleteWrapper>
                        </Grid>
                        <Grid item xs={4}>
                          <AutocompleteWrapper
                            multiple={true}
                            id="radiologists"
                            name="radiologists"
                            label="Radiologist"
                            prepopulatedValue={data.radiologists}
                            autocompleteOptions={
                              isSuccess ? autocompleteOptions.radiologists : []
                            }
                          ></AutocompleteWrapper>
                        </Grid>
                        <Grid item xs={4}>
                          <AutocompleteWrapper
                            multiple={true}
                            id="nurses"
                            name="nurses"
                            label="Nurses"
                            prepopulatedValue={data.nurses}
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
    </LocalizationProvider>
  );
}

export default RoutineForm;
