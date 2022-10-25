import { Container, Grid, Paper } from "@mui/material";

import Head from "next/head";
import { LoadingSpinner } from "../../components/Forms/LoadingSpinner";
import { RecordTableHeaders } from "/components/Table/RoutineRecordTableHeaderNew";
import { RowActionsItems } from "../../components/Table/RowActionsItems";
import TableMaterialReact from "/components/Table/MaterialTableReact";
import distance from "euclidean-distance";
import { getHomepageCTUnlimited } from "../../queries/queries";
import { useQuery } from "react-query";
import { useState } from "react";

function getTop10(data, age, volume) {
  console.log(data.filter((entry) => entry.ttp != null));
  var top10 = data
    .filter((entry) => entry.ttp != null)
    .sort(function (a, b) {
      return distance([age, volume], [a.age, a.volume]) >
        distance([age, volume], [b.age, b.volume])
        ? 1
        : -1;
    })
    .slice(0, 10);
  console.log("getTop10:" + Object.keys(top10).length);
  return top10;
}

export default function Table() {
  const [sorting, setSorting] = useState([]);

  const { data: records, isSuccess, isLoading } = useQuery(
    ["record"],
    async () => await getHomepageCTUnlimited(),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <LoadingSpinner maxWidth="80%" />;
  }
  if (isSuccess && records) {
    console.log(getTop10(records, 10, 10));
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
