import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import Buttons from "/components/CardiacForm/Buttons";
import CardiacSetup from "/components/CardiacForm/CardiacSetup";
import Head from "next/head";
import { LoadingSpinner } from "/components/Forms/LoadingSpinner";
import PatientDetail from "/components/CardiacForm/PatientDetail";
import React from "react";
import { getCardiacSetupByID } from "../../../../queries/queries";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

export default function CardiacSetupViewer() {
  const router = useRouter();
  const { protocolID } = router.query;
  const {
    data,
    isLoading: isQueryLoading,
    isSuccess: isQuerySuccess,
    isError,
  } = useQuery(
    ["CardiacSetupByID", protocolID],
    async () => await getCardiacSetupByID(protocolID),
    { retry: true }
  );

  if (isQueryLoading || !isQuerySuccess || !data) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <></>;
  }
  if (isQuerySuccess && data) {
    const { cardiacCT_by_id } = data;
    if (cardiacCT_by_id === null) {
      return <h2>No such exam</h2>;
    }
    return (
      <Grid sx={{ py: 3 }} container>
        <Head>
          <title>{`Records of ${cardiacCT_by_id?.PID} at ${cardiacCT_by_id.date_func.year}-${cardiacCT_by_id.date_func.month}-${cardiacCT_by_id.date_func.day}`}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Grid item xs={12}>
          <Container sx={{ maxWidth: "80%" }} maxWidth={false}>
            <Paper
              elevation={8}
              sx={{ px: 3, py: 5, bgcolor: "#FFF1B2", minHeight: "85vh" }}
            >
              {/* Heading */}
              <Box sx={{ backgroundColor: "#333333" }}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-evenly"
                  spacing={2}
                  sx={{ px: 2, py: 2 }}
                >
                  <Grid item xs={8}>
                    <Typography variant="h5" color="#FFFFFF" align="left">
                      {cardiacCT_by_id.PID}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h5" color="#FFFFFF" align="right">
                      {cardiacCT_by_id.date_func.year}-
                      {cardiacCT_by_id.date_func.month}-
                      {cardiacCT_by_id.date_func.day}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <PatientDetail cardiacCT_by_id={cardiacCT_by_id} />
              <Divider />
              <CardiacSetup cardiacCT_by_id={cardiacCT_by_id} />
              <Buttons cardiacCT_by_id={cardiacCT_by_id} />
            </Paper>
          </Container>
        </Grid>
      </Grid>
    );
  }
}
