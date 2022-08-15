import { Container, Grid, Paper } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import { RecordTableHeaders } from "/components/Table/RoutineRecordTableHeader";
import TableMaterial from "/components/Table/TableMaterial";
import { getHomepageCTNumber, getHomepageCTToday } from "/queries/queries";

export default function Table() {
  const router = useRouter();
  const { today } = router.query;
  const regex = /([0-9]{4})-([0-9]{1,2})-([0-9]{2})/g;
  if (today) {
    const found = [...today.matchAll(regex)];
    const [whole, year, month, day] = found[0];
    const { data: records, isSuccess, isLoading, isPreviousData } = useQuery(
      ["record", { year, month, day }],
      async () =>
        await getHomepageCTToday(
          parseFloat(year),
          parseFloat(month),
          parseFloat(day)
        ),
      {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false,
        keepPreviousData: true,
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
              {isSuccess && (
                <TableMaterial
                  records={records}
                  isSuccess={isSuccess}
                  rowCount={25}
                  isLoading={isLoading}
                  isPreviousData={isPreviousData}
                  columnHeaders={RecordTableHeaders}
                  paginationMode="client"
                  getRowId={(row) => row.count}
                />
              )}
            </Paper>
          </Container>
        </Grid>
      </Grid>
    );
  }
  return <></>;
}
