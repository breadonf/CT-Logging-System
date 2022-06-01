import { useEffect, useState } from "react";
import Head from "next/head";
import { useQuery } from "react-query";
import { getExamsRecordBySearch } from "../../../queries/queries";
import TableMaterial from "../../../components/Table/TableMaterial";
import { Paper, Grid, Container } from "@mui/material";
import { useRouter } from "next/router";
import Filters from "../../../components/Table/Filters";
import { Filter } from "@mui/icons-material";

export default function SearchTable() {
  const router = useRouter();
  const { queryWords } = router.query;
  console.log(queryWords);
  const [pageNumber, setPageNumber] = useState(1);
  const {
    data: records,
    isLoading: isQueryLoading,
    isSuccess: isQuerySuccess,
    isFetching,
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
      <Grid spacing={2} sx={{ py: 5 }} container>
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
