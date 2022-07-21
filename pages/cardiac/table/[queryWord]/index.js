import React from "react";
import Head from "next/head";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { getCardiacSetupByID } from "../../../../queries/queries";
import {
  Paper,
  Grid,
  Box,
  Container,
  Typography,
  Divider,
} from "@mui/material";
import PatientDetail from "../../../../components/CardiacForm/PatientDetail";
import CardiacSetup from "../../../../components/CardiacForm/CardiacSetup";
import Buttons from "../../../../components/CardiacForm/Buttons";
import { LoadingSpinner } from "../../../../components/Forms/CardiacForm/LoadingSpinner";

export default function CardiacSetupViewer() {
  const router = useRouter();
  const { queryWord } = router.query;
  const {
    data,
    isLoading: isQueryLoading,
    isSuccess: isQuerySuccess,
    isError,
    error,
  } = useQuery(
    ["CardiacSetupByID", queryWord],
    async () => await getCardiacSetupRecordBySearch(queryWord),
    { retry: true }
  );
  console.log(data);
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
      <Grid spacing={2} sx={{ py: 5 }} container>
        <Head>
          <title>{`Records of ${cardiacCT_by_id?.PID} at ${cardiacCT_by_id.date_func.year}-${cardiacCT_by_id.date_func.month}-${cardiacCT_by_id.date_func.day}`}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Grid item xs={12}>
          <Container sx={{ maxWidth: "80%" }} maxWidth={false}>
            <Paper
              elevation={12}
              sx={{
                p: 3,
                height: "85vh",
                bgcolor: "#F0F3BD",
                overflowY: "auto",
              }}
            >
              <Filters />
              <TableMaterial
                setPageNumber={setPageNumber}
                records={records.CT}
                isSuccess={isQuerySuccess}
                isLoading={isQueryLoading}
                pageNumber={pageNumber}
                isPreviousData={isPreviousData}
                paginationMode="client"
              />
            </Paper>
          </Container>
        </Grid>
      </Grid>
    );
  }
}
