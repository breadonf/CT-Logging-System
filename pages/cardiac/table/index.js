import { Container, Grid, Paper } from "@mui/material";

import Head from "next/head";
import { LoadingSpinner } from "/components/Forms/LoadingSpinner";
import { RecordTableHeaders } from "/components/Table/CardiacRecordTableHeaderNew";
import { RowActionsItems } from "/components/Table/RowActionsItems";
import TableMaterialReact from "/components/Table/MaterialTableReact";
import { getCardiacSetup } from "/queries/queries";
import { useQuery } from "react-query";
import { useState } from "react";

export default function CardiacSetupTable() {
  const [pageNumber, setPageNumber] = useState(1);
  const [sorting, setSorting] = useState([]);

  const {
    data: records,
    isLoading: isQueryLoading,
    isSuccess: isQuerySuccess,
    isPreviousData,
  } = useQuery(["CardiacSetupRecord"], async () => await getCardiacSetup(), {
    keepPreviousData: true,
  });
  if (isQueryLoading || !isQuerySuccess || !records) {
    return <LoadingSpinner />;
  }
  if (isQuerySuccess && records) {
    return (
      <Grid sx={{ py: 3 }} container>
        <Head>
          <title>Cardiac Case Table</title>
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
              <TableMaterialReact
                columnHeaders={RecordTableHeaders}
                records={records}
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
                    size: 350, //set custom width
                    muiTableHeadCellProps: {
                      align: "center", //change head cell props
                    },
                    muiTableBodyCellProps: {
                      align: "center", //change head cell props
                    },
                  },
                }}
                virtualizerProps={{ overscan: 40 }}
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
