import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useMemo, useState } from "react";

import CustomPagination from "./CustomPagination";
import Toolbar from "./Toolbar";

export default function TableMaterial({
  rowCount,
  setPageNumber,
  records,
  isSuccess,
  pageNumber,
  isPreviousData,
  paginationMode,
  columnHeaders,
  getRowId,
  height = "80vh",
  pageSize = 25,
}) {
  const headers = useMemo(
    () => columnHeaders,
    [columnHeaders] //dep list
  );
  const [rowCountState, setRowCountState] = useState(rowCount || 0);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    setRowCountState((prevRowCountState) =>
      rowCount !== undefined ? rowCount : prevRowCountState
    );
    setData(records);
    setIsLoading(false);
  }, [pageNumber, records, rowCount]);
  const configDataGrid = {
    rows: data,
    booleanCell: () => {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            classNameName="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      );
    },
    columns: headers,
    getRowId: getRowId,
    paginationMode: paginationMode,
    onPageChange: (newPage) => {
      if (!isPreviousData) {
        setPageNumber((newPage += 1));
      }
    },
    rowCount: rowCountState,
    components: { Toolbar: GridToolbar, Pagination: CustomPagination },
    loading: isLoading,
    pageSize: pageSize,
    components: {
      Toolbar: Toolbar,
    },
  };
  return (
    <>
      {isSuccess && (
        <div style={{ height: height }}>
          <DataGrid
            sx={{ p: 4, boxShadow: 5, overflowX: "auto" }}
            {...configDataGrid}
          />
        </div>
      )}
    </>
  );
}
