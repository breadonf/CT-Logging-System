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
  resetForm,
} from "formik";
import {
  Container,
  Paper,
  Grid,
  Typography,
  Button,
  FormLabel,
  Switch,
  Divider,
} from "@mui/material";
import SickIcon from "@mui/icons-material/Sick";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import TagIcon from "@mui/icons-material/Tag";
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
import sedatedBy from "../SelectItems/sedatedBy.json";
import sedationMethod from "../SelectItems/sedationMethod.json";
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

  const [sedation, setSedation] = React.useState(false);
  const [contrast, setContrast] = React.useState(false);
  React.useEffect(() => {
    if (data.volume) {
      setContrast(true);
    }
  }, []);
  const handleSwitch = (e) => {
    setContrast(e.target.checked);
  };
  if (isSuccess) {
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
                          <Typography
                            variant="h3"
                            align="center"
                            color="#093A3E"
                          >
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
                              label="Age (e.g. 3d => 3days, 5m => 5months, 12 => 12years) "
                            ></Textfield>
                          </Grid>
                          <Grid item xs={2} sx={{ml:4}}>
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
                          <Grid item xs={4}>
                            <DateTimePicker
                              name="Date"
                              label="Exam Date"
                              prepopulatedValue={data.Date}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <Checkbox
                              label="Yes"
                              name="urgent"
                              legend="Urgent?"
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <Checkbox
                              label="Yes"
                              name="IR"
                              legend="IR case?"
                              checked={data.IR}
                            />
                          </Grid>
                          <Grid item xs={4}>
                            <Grid container>
                              <Grid item xs={4}>
                                <Checkbox
                                  label="Yes"
                                  name="sedation"
                                  legend="Sedation"
                                  dependable={setSedation}
                                  checked={data.sedation}
                                />
                              </Grid>
                              {sedation && (
                                <>
                                  <Grid item xs={4}>
                                    <Select
                                      name="sedatedBy"
                                      label="by"
                                      options={sedatedBy}
                                    />
                                  </Grid>
                                  <Grid item xs={4}>
                                    <Select
                                      name="sedationMethod"
                                      label="using"
                                      options={sedationMethod}
                                    />
                                  </Grid>
                                </>
                              )}
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <AutocompleteWrapper
                              multiple={true}
                              id="protocol"
                              name="protocol"
                              label="Protocol"
                              prepopulatedValue={data?.protocol ?? []}
                              autocompleteOptions={
                                isSuccess
                                  ? autocompleteOptions?.protocol ?? []
                                  : []
                              }
                            ></AutocompleteWrapper>
                          </Grid>
                          <Grid item xs={4}>
                            <Select
                              sx={{ pt: 2 }}
                              name="examType"
                              label="Body region"
                              multiple
                              prepopulatedValue={data?.examType}
                              options={examType}
                            />
                          </Grid>
                          <Grid item xs={4}>
                            <AutocompleteWrapper
                              name="kV_a"
                              label="kV (Tube A)"
                              multiple
                              autocompleteOptions={kV_a}
                              prepopulatedValue={data?.kV_a ?? []}
                              groupBy={(option) => option.group}
                            />
                          </Grid>
                          <Grid item xs={4}>
                            <AutocompleteWrapper
                              name="kV_b"
                              label="kV (Tube B)"
                              multiple
                              autocompleteOptions={kV_b}
                              prepopulatedValue={data?.kV_b ?? []}
                            />
                          </Grid>
                          <Grid item xs={4} sx={{ mt: 2 }}>
                            <Textfield name="pitch" label="Pitch"></Textfield>
                          </Grid>
                          <Grid item xs={8} sx={{ mt: 2 }}>
                            <Textfield
                              name="ctdi"
                              label="CTDI (use comma to separate two value if needed)"
                            ></Textfield>
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
                                <Grid item xs={4}>
                                  <AutocompleteWrapper
                                    name="injectionSite"
                                    label="Injection Site"
                                    autocompleteOptions={injectionSites}
                                    prepopulatedValue={
                                      data?.injectionSite ?? []
                                    }
                                  />
                                </Grid>
                                <Grid item xs={2}>
                                  <Checkbox
                                    label="Yes"
                                    name="handInjection"
                                    legend="Hand Injection"
                                  />
                                </Grid>
                                <Grid item xs={3}>
                                  <Checkbox
                                    name="directPostContrast"
                                    label="Yes"
                                    legend="Direct post contrast study?"
                                  />
                                </Grid>
                                <Grid item xs={3}>
                                  <Checkbox
                                    label="Yes"
                                    name="mixedContrast"
                                    legend="Split Bolus"
                                  />
                                </Grid>
                                <Grid item xs={4}>
                                  <Select
                                    name="contrastType"
                                    label="Type of Contrast"
                                    options={typeOfContrast}
                                  />
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
                                    Delay Time (s): 0 = Start of Contrast
                                    Injection
                                  </Typography>
                                </Grid>
                                <Grid item xs={5.92}>
                                  <FieldArray name="delays">
                                    {(fieldArrayProps) => {
                                      const { push, remove, form } =
                                        fieldArrayProps;
                                      const { values } = form;
                                      const { delays } = values;
                                      console.log("delays", delays);
                                      return (
                                        <div>
                                          {delays?.map((delay, index) => (
                                            <div key={index}>
                                              <Grid
                                                container
                                                alignItems="center"
                                              >
                                                <Grid
                                                  item
                                                  xs={8}
                                                  sx={{ pb: 2 }}
                                                >
                                                  <Textfield
                                                    name={`delays[${index}]`}
                                                    label={`Delay Time(s) ${
                                                      index + 1
                                                    }`}
                                                  />
                                                </Grid>
                                                <Grid
                                                  item
                                                  xs={2}
                                                  sx={{ pb: 2 }}
                                                >
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
                                <Grid
                                  container
                                  spacing={2}
                                  component="div"
                                  sx={{ py: 3, px: 2 }}
                                >
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
                                      sx={{ fontSize: 16, fontWeight: "Bold" }}
                                      color="#05668D"
                                    >
                                      Please Enter Time to Peak * 100 HU * for
                                      Bolus Tracking/Timing Bolus cases
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={8}>
                                    <Textfield
                                      name="ttp"
                                      label="Time to 100 HU(s)"
                                    ></Textfield>
                                  </Grid>
                                </Grid>
                              </>
                            )}
                          </>
                        </Grid>

                        {/* Staff Details */}
                        <Grid
                          container
                          spacing={2}
                          component={"div"}
                          sx={{ py: 3 }}
                        >
                          <Grid item xs={12}>
                            <Typography variant="h5" color="#05668D">
                              <AirlineSeatReclineExtraIcon sx={{ mr: 1 }} />
                              Staff Details (Optional)
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <AutocompleteWrapper
                              multiple={true}
                              id="radiographers"
                              name="radiographers"
                              label="Radiographer"
                              prepopulatedValue={data.radiographers ?? []}
                              autocompleteOptions={
                                isSuccess
                                  ? autocompleteOptions.radiographers
                                  : []
                              }
                            ></AutocompleteWrapper>
                          </Grid>
                          <Grid item xs={4}>
                            <AutocompleteWrapper
                              multiple={true}
                              id="radiologists"
                              name="radiologists"
                              label="Radiologist"
                              prepopulatedValue={data.radiologists ?? []}
                              autocompleteOptions={
                                isSuccess
                                  ? autocompleteOptions.radiologists
                                  : []
                              }
                            ></AutocompleteWrapper>
                          </Grid>
                          <Grid item xs={4}>
                            <AutocompleteWrapper
                              multiple={true}
                              id="nurses"
                              name="nurses"
                              label="Nurses"
                              prepopulatedValue={data.nurses ?? []}
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
                          sx={{ pb: 5 }}
                        >
                          <Grid item>
                            <Typography variant="h5" color="#05668D">
                              <TagIcon sx={{ mr: 1 }} />
                              Keywords
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Textfield
                              rows={4}
                              name="keywords"
                              label="Keywords for your retrieval purpose"
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
                              label="Any additional detail you would like to make"
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
                              onClick={resetForm}
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
  } else {
    return <></>;
  }
}

export default RoutineForm;
