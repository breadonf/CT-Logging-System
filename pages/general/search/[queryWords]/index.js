import { Container, Grid, Paper } from "@mui/material";

import Filters from "../../../../components/Table/Filters";
import Head from "next/head";
import { LoadingSpinner } from "/components/Forms/LoadingSpinner";
import { RecordTableHeaders } from "../../../../components/Table/RoutineRecordTableHeaderNew";
import { RowActionsItems } from "../../../../components/Table/RowActionsItems";
import TableMaterialReact from "/components/Table/MaterialTableReact";
import { getExamsRecordBySearch } from "../../../../queries/queries";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchTable() {
  const router = useRouter();
  const { queryWords } = router.query;
  const [sorting, setSorting] = useState([]);

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
    return <LoadingSpinner />;
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
              <Filters endpoint="general/search" />
              <TableMaterialReact
                columnHeaders={RecordTableHeaders}
                records={records.CT}
                enableBottomToolbar={false}
                enablePagination={false}
                enableRowVirtualization
                enableColumnFilterModes
                enableRowActions
                enableClickToCopy
                muiTableBodyCellProps={{
                  sx: {
                    fontSize: "1rem",
                  },
                }}
                muiTableContainerProps={{
                  sx: {
                    maxHeight: "75vh",
                  },
                }}
                onSortingChange={setSorting}
                initialState={{
                  density: "spacious",
                  showColumnFilters: true,
                }}
                displayColumnDefOptions={{
                  "mrt-row-actions": {
                    size: 150, //set custom width
                    muiTableHeadCellProps: {
                      align: "center", //change head cell props
                    },
                    muiTableBodyCellProps: {
                      align: "center", //change head cell props
                    },
                  },
                }}
                virtualizerProps={{ overscan: 25 }}
                state={{ sorting }}
                renderRowActions={({ row }) => <RowActionsItems row={row} />}
              />
            </Paper>
          </Container>
        </Grid>
      </Grid>
    );
  }
}
