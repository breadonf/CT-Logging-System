import React from "react";
import { Grid, Paper, Typography, Container, Divider } from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
import InputFields from "./inputFields";
import Top10Display from "./top10Display";

function TTPCalculatorForm({ handleSubmit, top10Values }) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container
          maxWidth="lg"
          sx={{
            height: "90vh",
          }}
        >
          <Formik
            initialValues={{ weight: "", rate: "" }}
            validationSchema={yup.object().shape({
              rate: yup
                .number()
                .typeError("Please enter a number")
                .required("Required!")
                .min(0, "Invalid input")
                .max(10, "Impossible"),
              weight: yup
                .number()
                .typeError("Please enter a number")
                .required("Required!")
                .min(0, "Invalid input")
                .max(300, "Impossible"),
            })}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    height: "90vh",
                    py: 3,
                    justifyContent: "center",
                  }}
                >
                  <Paper
                    elevation={12}
                    sx={{
                      p: 3,
                      height: "85vh",
                      weight: 800,
                      bgcolor: "#F0F3BD",
                      overflowY: "auto",
                    }}
                  >
                    <Grid item xs={12} sx={{ p: 1 }}>
                      <Typography variant="h3" align="center" color="#093A3E">
                        Time to Peak Calculator
                      </Typography>
                    </Grid>
                    <Divider />
                    <Grid item xs={12}>
                      <InputFields formik={formik} />
                    </Grid>
                    <Grid item xs={12}>
                      {top10Values ? (
                        <Top10Display top10Values={top10Values} />
                      ) : (
                        <h1>please enter data</h1>
                      )}
                    </Grid>
                  </Paper>
                </Grid>
              </Form>
            )}
          </Formik>
        </Container>
      </Grid>
    </Grid>
  );
}

export default TTPCalculatorForm;
