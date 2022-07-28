import React from "react";
import { Paper, Grid, Container, Divider } from "@mui/material";
import Heading from "./Heading";
import PatientDetail from "./PatientDetail";
import ExamDetail from "./ExamDetail";
import ContrastDetail from "./ContrastDetail";
import StaffDetail from "./StaffDetail";
import Remarks from "./Remarks";
import BackButton from "./BackButton";

function DetailPage({ data }) {
  return (
    <Grid spacing={2} sx={{ py: 5 }} container>
      <Grid item xs={12}>
        <Container sx={{ maxWidth: "80%" }} maxWidth={false}>
          <Paper
            elevation={8}
            sx={{ px: 3, py: 5, bgcolor: "#FFF1B2", minHeight: "85vh" }}
          >
            <Heading data={data} />

            <PatientDetail data={data} />
            <Divider />

            <ExamDetail data={data} />
            <Divider />

            <ContrastDetail data={data} />

            <StaffDetail data={data} />
            <Divider />

            <Remarks data={data} />

            <BackButton />
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}

export default DetailPage;
