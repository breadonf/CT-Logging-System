import { useEffect, useMemo, useState } from "react";

import CustomPagination from "./CustomPagination";
import { DataGrid } from "@mui/x-data-grid";
import { LinearProgress } from "@mui/material";
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
  onPageSizeChange,
}) {
  const headers = useMemo(
    () => columnHeaders,
    [columnHeaders] //dep list
  );
  // const [queryOptions, setQueryOptions] = useState({});
  const [rowCountState, setRowCountState] = useState(rowCount || 0);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  // const onFilterChange = useCallback((filterModel) => {
  //   setQueryOptions({ filterModel: { ...filterModel } });
  //   console.log(filterModel);
  // }, []);

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
            className="h-6 w-6"
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
    getRowHeight: () => "auto",
    paginationMode: paginationMode,
    onPageChange: (newPage) => {
      if (!isPreviousData) {
        setPageNumber((newPage += 1));
      }
    },
    rowCount: rowCountState,
    rowHeight: 65,
    components: { Pagination: CustomPagination },
    loading: isLoading,
    pageSize: pageSize,
    // filterMode: "server",
    // onFilterModelChange: onFilterChange,
    columnBuffer: 10,
    columnThreshold: 10,
    onPageSizeChange: onPageSizeChange,
    rowsPerPageOptions: [10, 25, -1],
    components: {
      Toolbar: Toolbar,
      LoadingOverlay: LinearProgress,
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
