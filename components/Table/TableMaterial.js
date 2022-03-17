import {
  DataGrid,
  GridToolbar,
  useGridApiContext,
  useGridSelector,
  gridPageCountSelector,
  gridPageSelector,
} from "@mui/x-data-grid";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { useState, useEffect } from "react";
import wait from "../../helpers/wait";
import Chip from "@mui/material/Chip";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
const headers = [
  { field: "count", headerName: "Entry id" },
  {
    field: "Date",
    headerName: "Date of Exam",
    flex: 0.2,
    valueGetter: ({ value }) => value && new Date(value),
    valueFormatter: ({ value }) => {
      const valueFormatted =
        value.getFullYear().toString() +
        "-" +
        (value.getMonth() + 1).toString() +
        "-" +
        value.getDate().toString();
      return valueFormatted;
    },
  },
  {
    field: "inPatient",
    headerName: "Inpatient",
    renderCell: (isInpatient) => {
      return isInpatient.value ? <CheckRoundedIcon /> : <></>;
    },
  },

  { field: "PID", headerName: "Patient ID", flex: 0.05 },
  {
    field: "age",
    headerName: "Age",
    valueGetter: ({ value }) => value && new Number(value),
  },
  {
    headerName: "Protocol",
    field: "protocol",
    flex: 0.2,
    renderCell: (protocols) => {
      return protocols.value ? protocols.value.join(", ") : <></>;
    },
  },
  { headerName: "Weight", field: "weight" },
  { headerName: "Height", field: "height" },
  { headerName: "kV (Tube A)", field: "kV_a" },
  { headerName: "kV (Tube B)", field: "kV_b" },
  { headerName: "Injection Rate", field: "rate" },
  { headerName: "Contrast volume", field: "volume" },
  {
    headerName: "Reporting Radiologists",
    field: "radiologists",
    flex: 0.2,
    renderCell: (radiologists) => {
      return radiologists.value ? (
        <div>
          {radiologists.formattedValue.map((radiologist) => (
            <Chip variant="outlined" color="primary" label={radiologist} />
          ))}
        </div>
      ) : (
        <></>
      );
    },
  },
];
function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

export default function TableMaterial({
  rowCount,
  setPageNumber,
  records,
  isSuccess,
  pageNumber,
  isStale,
  isPreviousData,
}) {
  const [rowCountState, setRowCountState] = useState(rowCount || 0);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    setRowCountState((prevRowCountState) =>
      rowCount !== undefined ? rowCount : prevRowCountState
    );

    setData(records);
    console.log("pageNumber", pageNumber);
    wait(0);
    setIsLoading(false);
  }, [pageNumber, records]);
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
    getRowId: (row) => row.count,
    paginationMode: "server",
    onPageChange: (newPage) => {
      if (!isPreviousData) {
        setPageNumber((newPage += 1));
      }
    },
    rowCount: rowCount,
    components: { Toolbar: GridToolbar, Pagination: CustomPagination },
    loading: isLoading,
    pageSize: 25,
  };
  return (
    <>
      {isSuccess && (
        <div style={{ height: "80vh" }}>
          <DataGrid {...configDataGrid} />
        </div>
      )}
    </>
  );
}
