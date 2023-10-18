import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { Form, Formik } from "formik";

import BottomButton from "./bottomButton";
import { LoadingSpinner } from "../LoadingSpinner";
import PatientDetail from "./patientDetail";
import React from "react";
import ScanMode from "./scanMode";
import { getHomepageData } from "../../../queries/queries";
import { useQuery } from "react-query";

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
                              Cardiac CT Record Log Form
                            </Typography>
                          </Grid>
                          <PatientDetail
                            autocompleteOptions={autocompleteOptions}
                            isSuccess={isSuccess}
                            data={data}
                          />
                          <ScanMode
                            autocompleteOptions={autocompleteOptions}
                            formik={formik}
                            isSuccess={isSuccess}
                            data={data}
                          />
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
    );
  }
}

export default CardiacForm;
