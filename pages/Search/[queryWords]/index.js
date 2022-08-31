import { Container, Grid, Paper } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import Filters from "../../../components/Table/Filters";
import { RecordTableHeaders } from "../../../components/Table/RoutineRecordTableHeader";
import TableMaterial from "../../../components/Table/TableMaterial";
import { getExamsRecordBySearch } from "../../../queries/queries";

export default function SearchTable() {
  const router = useRouter();
  const { queryWords } = router.query;
  const [pageNumber, setPageNumber] = useState(1);
  console.log(queryWords);
  const {
    data: records,
    isLoading: isQueryLoading,
    isSuccess: isQuerySuccess,
    isError,
    isPreviousData,
  } = useQuery(
    ["record", queryWords],
    async () => await getExamsRecordBySearch(queryWords)
  );
  if (isQueryLoading || !isQuerySuccess || !records) {
    return <h2>Loading</h2>;
  }
  if (isError) {
    return <></>;
  }
  if (isQuerySuccess && records) {
    return (
      <Grid sx={{ py: 3 }} container>
        <Head>
          <title>CT record</title>
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
              <Filters endpoint="Search" />
              <TableMaterial
                setPageNumber={setPageNumber}
                records={records.CT}
                isSuccess={isQuerySuccess}
                isLoading={isQueryLoading}
                columnHeaders={RecordTableHeaders}
                pageNumber={pageNumber}
                isPreviousData={isPreviousData}
                paginationMode="client"
                getRowId={(row) => row.count}
                height="60vh"
                pageSize={10}
              />
            </Paper>
          </Container>
        </Grid>
      </Grid>
    );
  }
}
