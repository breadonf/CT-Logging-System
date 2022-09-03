import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";

import { useQuery } from "react-query";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CardiacSetup from "./CardiacSetup";
import PatientDetail from "./patientDetail";
import PhaseDetail from "./PhaseDetail";
import ScanMode from "./scanMode";

import { getHomepageData } from "../../../queries/queries";
import BottomButton from "./bottomButton";
import CardiacExamRecord from "./examRecord";
import { LoadingSpinner } from "../LoadingSpinner";

function CardiacProtocolForm({ data, handleSubmit }) {
  const [numberOfSites, setNumberOfSites] = React.useState(1);
  const [recordMode, setRecordMode] = React.useState(false);
  const { data: autocompleteOptions, isSuccess, isLoading } = useQuery(
    "autocompleteOptions",
    async () => await getHomepageData()
  );
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isSuccess) {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container>
          <Grid item xs={12}>
            <Container maxWidth="lg">
              <Formik initialValues={data} onSubmit={handleSubmit}>
                {(formik) => {
                  // HACK check form value using console.log(formik.values)
                  return (
                    <Form>
                      <Box container spacing={2} sx={{ height: "90vh", py: 3 }}>
                        <Grid item xs={12}>
                          <Paper
                            elevation={12}
                            sx={{
                              p: 3,
                              height: "85vh",
                              bgcolor: "#F0F3BD",
                              overflowY: "auto",
                            }}
                          >
                            {recordMode ? (
                              <CardiacExamRecord
                                autocompleteOptions={autocompleteOptions}
                                isSuccess={isSuccess}
                                data={data}
                                formik={formik}
                              />
                            ) : (
                              <>
                                <Grid item xs={12}>
                                  <Typography
                                    variant="h3"
                                    align="center"
                                    color="#093A3E"
                                  >
                                    Cardiac Case Setup Log Form
                                  </Typography>
                                </Grid>
                                <PatientDetail
                                  autocompleteOptions={autocompleteOptions}
                                  isSuccess={isSuccess}
                                  data={data}
                                />
                                <CardiacSetup
                                  formik={formik}
                                  numberOfSites={numberOfSites}
                                  setNumberOfSites={setNumberOfSites}
                                />
                                <ScanMode formik={formik} />
                                <PhaseDetail formik={formik} />
                              </>
                            )}
                            <BottomButton
                              formik={formik}
                              setRecordMode={setRecordMode}
                              recordMode={recordMode}
                            />
                          </Paper>
                        </Grid>
                      </Box>
                    </Form>
                  );
                }}
              </Formik>
            </Container>
          </Grid>
        </Grid>
      </LocalizationProvider>
    );
  }
}

export default CardiacProtocolForm;
