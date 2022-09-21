import { Container, Grid, Paper } from "@mui/material";
import { getHomepageCT, getHomepageCTNumber } from "../../queries/queries";

import Head from "next/head";
import Loader from "/components/Loader";
import { RecordTableHeaders } from "/components/Table/RoutineRecordTableHeaderNew";
import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { useState } from "react";

const TableMaterialReact = dynamic(
  () => import("/components/Table/MaterialTableReact"),
  {
    loading: () => <Loader />,
  }
);

export default function Table() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 25,
  });

  const { data: records, isSuccess, isLoading, isPreviousData } = useQuery(
    ["record", pagination],
    async () =>
      await getHomepageCT(pagination.pageIndex + 1, pagination.pageSize),
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
            {isSuccess && isRowCountSuccess && (
              <TableMaterialReact
                isSuccess={isSuccess}
                columnHeaders={RecordTableHeaders}
                records={records}
                onPaginationChange={setPagination}
                pagination={pagination}
                rowCount={rowCount ?? 0}
                manualPagination
                muiTablePaginationProps={{
                  rowsPerPageOptions: [5, 10, 25, { label: "All", value: -1 }],
                  showFirstLastPageButtons: false,
                }}
              />
            )}
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}
