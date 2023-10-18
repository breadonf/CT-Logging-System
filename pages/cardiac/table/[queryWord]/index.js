import { Container, Grid, Paper } from "@mui/material";

import Filters from "~/components/Table/Filters";
import Head from "next/head";
import { LoadingSpinner } from "~/components/Forms/LoadingSpinner";
import { RecordTableHeaders } from "~/components/Table/CardiacRecordTableHeader";
import TableMaterial from "~/components/Table/TableMaterial";
import { getCardiacSetupRecordBySearch } from "~/queries/queries";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CardiacSetupTable() {
  const router = useRouter();
  const { queryWord } = router.query;
  const [sorting, setSorting] = useState([]);
  const {
    data: records,
    isLoading: isQueryLoading,
    isSuccess: isQuerySuccess,
    isError,
  } = useQuery(
    ["CardiacSetupRecordBySearch", queryWord],
    async () => await getCardiacSetupRecordBySearch(queryWord),
    { retry: true }
  );

  if (isQueryLoading || !isQuerySuccess || !records) {
    return <LoadingSpinner />;
  }
  const { cardiacCT } = records;
  if (cardiacCT === null) {
    return <h2>No such exam</h2>;
  }
  return (
    <Grid sx={{ py: 3 }} container>
      <Head>
        <title>{`Search result of ${queryWord}`}</title>
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
            <Filters endpoint="cardiac/table" />
            {isQuerySuccess && records && (
              <TableMaterial
                records={cardiacCT}
                isSuccess={isQuerySuccess}
                rowCount={cardiacCT.length}
                isLoading={isQueryLoading}
                columnHeaders={RecordTableHeaders}
              />
            )}
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}
