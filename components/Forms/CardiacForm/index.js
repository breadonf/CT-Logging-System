import React from "react";
import { Formik, Form } from "formik";
import { Container, Paper, Grid, Typography, Box } from "@mui/material";

import { useQuery } from "react-query";

import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import PatientDetail from "./patientDetail";
import CardiacSetup from "./CardiacSetup";
import ScanMode from "./scanMode";
import PhaseDetail from "./PhaseDetail";

import { getHomepageData } from "../../../queries/queries";
import BottomButton from "./bottomButton";
import { LoadingSpinner } from "./LoadingSpinner";

function CardiacForm({ data, handleSubmit }) {
  const [numberOfSites, setNumberOfSites] = React.useState(1);
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
                            <BottomButton formik={formik} />
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

export default CardiacForm;
