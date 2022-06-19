import React from "react";
import { Formik, Form } from "formik";
import { Container, Paper, Grid, Typography } from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "react-query";

import PatientDetail from "./PatientDetail";
import ExamDetail from "./ExamDetail";
import ContrastDetail from "./ContrastDetail";
import StaffDetail from "./StaffDetail";
import Remarks from "./Remarks";
import BottomButton from "./BottomButton";

import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import FORM_VALIDATION from "./ValidationSchema";

import { getHomepageData } from "../../../queries/queries";

function RoutineForm({ data, handleSubmit }) {
  const { data: autocompleteOptions, isSuccess, isLoading } = useQuery(
    "autocompleteOptions",
    async () => await getHomepageData()
  );
  const [sedation, setSedation] = React.useState(false);
  const [contrast, setContrast] = React.useState(false);
  const [numberOfProtocol, setNumberOfProtocol] = React.useState(1);

  React.useEffect(() => {
    if (data.volume) {
      setContrast(true);
    }
    if (data.ctdi.length > 1) {
      setNumberOfProtocol(data.ctdi.length);
    }
    if (data.pitch.length > 1) {
      setNumberOfProtocol(data.pitch.length);
    }
  }, []);
  const handleSwitch = (e) => {
    setContrast(e.target.checked);
  };
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
                {(formik) => (
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
                          <Grid item xs={12}>
                            <Typography
                              variant="h3"
                              align="center"
                              color="#093A3E"
                            >
                              Routine Case Log Form
                            </Typography>
                          </Grid>
                          <PatientDetail />
                          <ExamDetail
                            data={data}
                            sedation={sedation}
                            autocompleteOptions={autocompleteOptions}
                            isSuccess={isSuccess}
                            numberOfProtocol={numberOfProtocol}
                            setNumberOfProtocol={setNumberOfProtocol}
                            formik={formik}
                            setSedation={setSedation}
                          />
                          <ContrastDetail
                            data={data}
                            contrast={contrast}
                            handleSwitch={handleSwitch}
                          />
                          <StaffDetail
                            data={data}
                            autocompleteOptions={autocompleteOptions}
                            isSuccess={isSuccess}
                          />
                          <Remarks />
                          {/* Buttons */}
                          <BottomButton formik={formik} />
                        </Paper>
                      </Grid>
                    </Grid>
                  </Form>
                )}
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

export default RoutineForm;
