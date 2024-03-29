import React from "react";
import { Paper, Grid, Container, Divider, Typography } from "@mui/material";
import Heading from "./Heading";
import PatientDetail from "./PatientDetail";
import ExamDetail from "./ExamDetail";
import ContrastDetail from "./ContrastDetail";
import StaffDetail from "./StaffDetail";
import Remarks from "./Remarks";
import BottomButton from "./bottomButton";

function DetailPage({ data }) {
  return (
    <Grid spacing={2} sx={{ py: 5 }} container>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <Paper
            elevation={8}
            sx={{
              px: 3,
              py: 5,
              bgcolor: "#FFF1B2",
              minHeight: "85vh",
              maxWidth: "70vw",
            }}
          >
            <Heading data={data} />

            <PatientDetail data={data} />
            <Divider />

            <ExamDetail data={data} />
            <Divider />

            {data.volume ? (
              <ContrastDetail data={data} />
            ) : (
              <>
                <Typography align="center">
                  No Contrast Injection Record
                </Typography>
                <Divider />
              </>
            )}

            <StaffDetail data={data} />
            <Divider />

            <Remarks data={data} />

            <BottomButton Id={data.count} />
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}

export default DetailPage;
