import { useEffect, useState } from "react";
import Head from "next/head";
import { useQuery } from "react-query";
import { getHomepageCT, getHomepageCTNumber } from "../queries/queries";
import TableMaterial from "../components/Table/TableMaterial";
import { Paper, Grid, Container, Box } from "@mui/material";

export default function Table() {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    data: records,
    isSuccess,
    isLoading,
    isFetching,
    isPreviousData,
  } = useQuery(
    ["record", pageNumber],
    async () => await getHomepageCT(pageNumber),
    {
      keepPreviousData: true,
    }
  );
  const { data: rowCount, isSuccess: isRowCountSuccess } = useQuery(
    "rowNumbers",
    async () => await getHomepageCTNumber(),
    {
      staleTime: 60 * 1000,
    }
  );
  return (
    <Grid spacing={2} sx={{ py: 4 }} container>
      <Head>
        <title>CT record</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Grid item xs={12}>
        <Container sx={{ maxWidth: "80%" }} maxWidth={false}>
          <Paper
            elevation={12}
            sx={{ p: 3, bgcolor: "#F0F3BD", height: "85vh" }}
          >
            {isSuccess && isRowCountSuccess && (
              <TableMaterial
                setPageNumber={setPageNumber}
                records={records}
                isSuccess={isSuccess}
                rowCount={rowCount}
                isLoading={isLoading}
                pageNumber={pageNumber}
                isPreviousData={isPreviousData}
                paginationMode="server"
              />
            )}
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}
