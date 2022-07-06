import React from "react";
import { Formik, Form } from "formik";
import { Container, Paper, Grid, Typography } from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "react-query";

import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import FORM_VALIDATION from "./ValidationSchema";
import PatientDetail from "./patientDetail";
import CardiacSetup from "./CardiacSetup";
import ScanMode from "./scanMode";
import PhaseDetail from "./PhaseDetail";

import { getHomepageData } from "../../../queries/queries";

function CardiacForm({ data, handleSubmit }) {
  const { data: autocompleteOptions, isSuccess, isLoading } = useQuery(
    "autocompleteOptions",
    async () => await getHomepageData()
  );
  const [numberOfSites, setNumberOfSites] = React.useState(1);

  if (isLoading) {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <Paper
              elevation={12}
              sx={{
                p: 3,
                height: "85vh",
                bgcolor: "#F0F3BD",
                overflowY: "auto",
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{ py: 5 }}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <CircularProgress size="25vh" />
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    );
  }
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
                {(formik) => {
                  return (
                    <Form>
                      <Grid
                        container
                        spacing={2}
                        sx={{ height: "90vh", py: 3 }}
                      >
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
                            <PatientDetail />
                            <CardiacSetup
                              formik={formik}
                              numberOfSites={numberOfSites}
                              setNumberOfSites={setNumberOfSites}
                            />
                            <ScanMode formik={formik} />
                            <PhaseDetail formik={formik} />
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
      </LocalizationProvider>
    );
  } else {
    return (
      <>
        <div>not loading or success</div>
      </>
    );
  }
}

export default CardiacForm;
