import { useEffect, useState } from "react";
import Head from "next/head";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { getCardiacSetupRecordBySearch } from "../../../../queries/queries";
import { Paper, Grid, Container } from "@mui/material";
import { LoadingSpinner } from "../../../../components/Forms/CardiacForm/LoadingSpinner";
import { RecordTableHeaders } from "../../../../components/Table/CardiacRecordTableHeader";
import Filters from "../../../../components/Table/Filters";
import TableMaterial from "../../../../components/Table/TableMaterial";
export default function CardiacSetupTable() {
  const router = useRouter();
  const { queryWord } = router.query;
  const [pageNumber, setPageNumber] = useState(1);
  const {
    data: records,
    isLoading: isQueryLoading,
    isSuccess: isQuerySuccess,
    isError,
    error,
    isPreviousData,
  } = useQuery(
    ["CardiacSetupRecordBySearch", queryWord],
    async () => await getCardiacSetupRecordBySearch(queryWord),
    { retry: true }
  );
  console.log(records);
  if (isQueryLoading || !isQuerySuccess || !records) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <></>;
  }
  if (isQuerySuccess && records) {
    const { cardiacCT_by_id } = records;
    if (cardiacCT_by_id === null) {
      return <h2>No such exam</h2>;
    }
    return (
      <Grid spacing={2} sx={{ py: 5 }} container>
        <Head>
          <title>{`Records of ${cardiacCT_by_id?.PID}`}</title>
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
                records={records.cardiacCT}
                isSuccess={isQuerySuccess}
                isLoading={isQueryLoading}
                pageNumber={pageNumber}
                isPreviousData={isPreviousData}
                columnHeaders={RecordTableHeaders}
                paginationMode="client"
              />
            </Paper>
          </Container>
        </Grid>
      </Grid>
    );
  }
}
