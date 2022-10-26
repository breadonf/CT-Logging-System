import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Container,
  Box,
  Button,
  Divider,
} from "@mui/material";
import { Formik, Form } from "formik";
import Textfield from "~/components/FormsUI/Textfield";
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
                      <Box
                        sx={{
                          backgroundColor: "white",
                          p: 2,
                          m: 2,
                          borderRadius: 5,
                          border: 1,
                        }}
                      >
                        <Grid container spacing={1}>
                          <Grid item xs={4}>
                            <Textfield
                              name="rate"
                              label="Injection Rate (ml/s)"
                            ></Textfield>
                          </Grid>
                          <Grid item xs={4}>
                            <Textfield
                              name="weight"
                              label="Weight (kg)"
                            ></Textfield>
                          </Grid>
                          <Grid item xs={4} sx={{ alignSelf: "center" }}>
                            <Button
                              variant="contained"
                              type="submit"
                              value="Submit"
                              fullWidth
                              disabled={formik.isSubmitting}
                            >
                              Submit
                            </Button>
                          </Grid>
                        </Grid>
                      </Box>
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
