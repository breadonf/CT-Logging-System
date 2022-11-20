import { Container, Grid, Paper, Typography } from "@mui/material";
import { Form, Formik } from "formik";

import BottomButton from "./bottomButton";
import CardiacExamRecord from "./examRecord";
import CardiacSetup from "./CardiacSetup";
import { LoadingSpinner } from "../LoadingSpinner";
import PatientDetail from "./patientDetail";
import PhaseDetail from "./PhaseDetail";
import React from "react";
import ScanMode from "./scanMode";
import { getHomepageData } from "../../../queries/queries";
import { useQuery } from "react-query";
import validationSchema from "./ValidationSchema";

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
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <Formik
              initialValues={data}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => {
                // HACK check form value using console.log(formik.values)
                return (
                  <Form>
                    <Grid container spacing={2} sx={{ height: "90vh", py: 3 }}>
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
                              <ScanMode
                                formik={formik}
                                data={data}
                                autocompleteOptions={autocompleteOptions}
                                isSuccess={isSuccess}
                              />
                              <PhaseDetail formik={formik} />
                            </>
                          )}
                          <BottomButton
                            formik={formik}
                            setRecordMode={setRecordMode}
                            recordMode={recordMode}
                            readyForRecord={formik.values.readyForRecord}
                          />
                        </Paper>
                      </Grid>
                    </Grid>
                  </Form>
                );
              }}
            </Formik>
          </Container>
        </Grid>
      </Grid>
    );
  }
}

export default CardiacProtocolForm;
