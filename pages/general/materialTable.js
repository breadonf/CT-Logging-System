import { Container, Grid, Paper } from "@mui/material";

import Head from "next/head";
import { RecordTableHeaders } from "/components/Table/RoutineRecordTableHeaderNew";
import TableMaterialReact from "../../components/Table/MaterialTableReact";
import { getHomepageCTUnlimited } from "../../queries/queries";
import { useQuery } from "react-query";
import { useState } from "react";

export default function Table() {
  const { data: records, isSuccess, isLoading, isPreviousData } = useQuery(
    ["record"],
    async () => await getHomepageCTUnlimited(),
    {
      keepPreviousData: true,
    }
  );

  isSuccess && console.log(records);
  console.log(RecordTableHeaders);
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
            sx={{ p: 3, bgcolor: "#F0F3BD", height: "85vh" }}
          >
            {isSuccess && (
              <TableMaterialReact
                isSuccess={isSuccess}
                columnHeaders={RecordTableHeaders}
                records={records}
              />
            )}
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}
