import { AccountCircle, Send } from "@mui/icons-material";
import { Container, Grid, ListItemIcon, MenuItem, Paper } from "@mui/material";

import Head from "next/head";
import Link from "next/link";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import PageviewIcon from "@mui/icons-material/Pageview";
import { RecordTableHeaders } from "/components/Table/RoutineRecordTableHeaderNew";
import SearchIcon from "@mui/icons-material/Search";
import TableMaterialReact from "/components/Table/MaterialTableReact";
import { getHomepageCTUnlimited } from "../../queries/queries";
import { useQuery } from "react-query";
import { useState } from "react";

//import { getHomepageCT, getHomepageCTNumber } from "../../queries/queries";
function RowActionsItems(row) {
  console.log(row);
  return (
    <>
      <Link key="1" passHref href={`/exam/${row.id}`}>
        <MenuItem key={0} sx={{ m: 0 }}>
          <ListItemIcon>
            <PageviewIcon />
          </ListItemIcon>
          View exam detail
        </MenuItem>
      </Link>

      <MenuItem key={1} sx={{ m: 0 }}>
        <ListItemIcon>
          <ModeEditIcon />
        </ListItemIcon>
        Edit exam
      </MenuItem>
      <MenuItem key={1} sx={{ m: 0 }}>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        Search previous exam(s)
      </MenuItem>
    </>
  );
}

export default function Table() {
  const [sorting, setSorting] = useState([]);

  // const { data: records, isSuccess, isLoading, isPreviousData } = useQuery(
  //   ["record", pagination],
  //   async () =>
  //     await getHomepageCT(pagination.pageIndex + 1, pagination.pageSize),
  //   {
  //     keepPreviousData: true,
  //   }
  // );
  const { data: records, isSuccess, isLoading } = useQuery(
    ["record"],
    async () => await getHomepageCTUnlimited(),
    {
      keepPreviousData: true,
    }
  );
  // const { data: rowCount, isSuccess: isRowCountSuccess } = useQuery(
  //   "rowNumbers",
  //   async () => await getHomepageCTNumber(),
  //   {
  //     staleTime: 60 * 1000,
  //   }
  // );
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
              // <TableMaterialReact
              //   isSuccess={isSuccess}
              //   columnHeaders={RecordTableHeaders}
              //   records={records}
              //   onPaginationChange={setPagination}
              //   pagination={pagination}
              //   rowCount={rowCount ?? 0}
              //   manualPagination
              //   onSortingChange={setSorting}
              //   state={{ isLoading, sorting }}
              //   muiTablePaginationProps={{
              //     rowsPerPageOptions: [10, 25, 50, { label: "All", value: -1 }],
              //     showFirstLastPageButtons: false,
              //   }}
              //   virtualizerInstanceRef={virtualizerInstanceRef} //optional
              //   virtualizerProps={{ overscan: 20 }}
              // />
              <TableMaterialReact
                columnHeaders={RecordTableHeaders}
                records={records}
                enableBottomToolbar={false}
                enablePagination={false}
                enableRowVirtualization
                enableColumnFilterModes
                enableRowActions
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
                virtualizerProps={{ overscan: 20 }}
                state={{ sorting }}
                renderRowActionMenuItems={({ closeMenu, row }) => {
                  const { count } = row.original;
                  return (
                    <>
                      <Link key="1" passHref href={`/exam/${count}`}>
                        <MenuItem key={0} sx={{ m: 0 }}>
                          <ListItemIcon>
                            <PageviewIcon />
                          </ListItemIcon>
                          View exam detail
                        </MenuItem>
                      </Link>
                      <Link key="2" passHref href={`/forms/editForm/${count}`}>
                        <MenuItem key={1} sx={{ m: 0 }}>
                          <ListItemIcon>
                            <ModeEditIcon />
                          </ListItemIcon>
                          Edit exam
                        </MenuItem>
                      </Link>
                      <Link key="3" passHref href={`/general/search/${count}`}>
                        <MenuItem key={1} sx={{ m: 0 }}>
                          <ListItemIcon>
                            <SearchIcon />
                          </ListItemIcon>
                          Search previous exam(s)
                        </MenuItem>
                      </Link>
                    </>
                  );
                }}
              />
            )}
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}
