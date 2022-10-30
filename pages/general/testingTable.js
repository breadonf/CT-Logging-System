import {
  Row,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Head from "next/head";
import { LoadingSpinner } from "~/components/Forms/LoadingSpinner";
import MaUTable from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import React from "react";
import { RecordTableHeaders } from "~/components/Table/RoutineHeaderTesting";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { autocompleteClasses } from "@mui/material";
import { getHomepageCTUnlimited } from "../../queries/queries";
import { useQuery } from "react-query";
import { useVirtual } from "react-virtual";

export default function Table() {
  const { data, isSuccess, isLoading } = useQuery(
    ["recordUnlimited"],
    async () => await getHomepageCTUnlimited(),
    {}
  );

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (isSuccess && data) {
    return <TableInstance tableData={data}></TableInstance>;
  }
}
function TableLayout({ table }) {
  const tableContainerRef = React.useRef();
  const { rows } = table.getRowModel();
  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length ?? 3211,
    overscan: 10,
  });
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer;
  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const paddingBottom =
    virtualRows.length > 0
      ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
      : 0;
  return (
    <div style={{ maxHeight: "70vh", overflow: "auto" }}>
      <MaUTable ref={tableContainerRef}>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{ width: header.getSize() }}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {paddingTop > 0 && (
            <tr>
              <td style={{ height: `${paddingTop}px` }} />
            </tr>
          )}
          {virtualRows.map((virtualRow) => {
            const row = rows[virtualRow.index];
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
          {paddingBottom > 0 && (
            <tr>
              <td style={{ height: `${paddingBottom}px` }} />
            </tr>
          )}
        </TableBody>
      </MaUTable>
    </div>
  );
}
function TableInstance({ tableData }) {
  const [sorting, setSorting] = React.useState([]);

  const [columns, data] = React.useMemo(() => {
    const columns = RecordTableHeaders;
    return [columns, tableData];
  }, [tableData]);
  const table = useReactTable({
    columns,
    data,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
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
            sx={{ p: 3, bgcolor: "#F0F3BD", minHeight: "85vh" }}
          >
            <TableLayout table={table} />
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}
