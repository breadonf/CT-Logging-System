import React from "react";
import { Grid, Paper, Typography, Container, Box, Button } from "@mui/material";
import { Formik, Form } from "formik";
import Textfield from "~/components/FormsUI/Textfield";

function TTPCalculatorForm({handleSubmit}) {
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
            <Form>
              <Grid Container spacing={2} sx={{ height: "90vh", py: 3 }}>
                <Paper
                  elevation={12}
                  sx={{
                    p: 3,
                    height: "85vh",
                    bgcolor: "#F0F3BD",
                    overflowY: "auto",
                  }}
                >
                  <Grid item xs={12} sx={{ p: 2 }}>
                    <Typography variant="h3" align="center" color="#093A3E">
                      Time to Peak Calculator (Beta)
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        backgroundColor: "white",
                        p: 4,
                        m: 4,
                        borderRadius: 5,
                        border: 2,
                      }}
                    >
                      <Grid container spacing={2}>
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
                            disabled={Formik.isSubmitting}
                          >
                            Submit
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Paper>
              </Grid>
            </Form>
          </Formik>
        </Container>
      </Grid>
    </Grid>
  );
}

export default TTPCalculatorForm;
