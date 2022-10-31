import Container from "@mui/material/Container";
import Filters from "~/components/Table/Filters";
import Grid from "@mui/material/Grid";
import Head from "next/head";
import { LoadingSpinner } from "/components/Forms/LoadingSpinner";
import Paper from "@mui/material/Paper";
import { RecordTableHeaders } from "~/components/Table/RoutineRecordTableHeader";
import TableMaterial from "~/components/Table/TableMaterial";
import { getExamsRecordBySearch } from "~/queries/queries";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchTable() {
  const router = useRouter();
  const { queryWords } = router.query;
  const [sorting, setSorting] = useState([]);
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
    return <LoadingSpinner />;
  }
  if (isError) {
    return <></>;
  }
  if (isQuerySuccess && records) {
    console.log(records.length);

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
              <Filters endpoint="general/search" />
              <TableMaterial
                records={records.CT}
                isSuccess={isQuerySuccess}
                rowCount={records.length}
                isLoading={isQueryLoading}
                isPreviousData={isPreviousData}
                columnHeaders={RecordTableHeaders}
                getRowId={(row) => row.count}
                height="50vh"
              />
            </Paper>
          </Container>
        </Grid>
      </Grid>
    );
  }
}
