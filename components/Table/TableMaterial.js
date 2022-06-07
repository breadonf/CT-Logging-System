import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { useState, useEffect, useMemo } from "react";
import wait from "../../helpers/wait";
import Chip from "@mui/material/Chip";
import CustomPagination from "./CustomPagination";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Link from "next/link";
import PageviewIcon from "@mui/icons-material/Pageview";
import SearchIcon from "@mui/icons-material/Search";
import Toolbar from "./Toolbar";

export default function TableMaterial({
  rowCount,
  setPageNumber,
  records,
  isSuccess,
  pageNumber,
  isStale,
  isPreviousData,
  paginationMode,
}) {
  const headers = useMemo(
    () => [
      { field: "count", headerName: "Entry id" },
      {
        field: "Date",
        headerName: "Date of Exam",
        type: "dateTime",
        width: 100,
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
      { field: "PID", headerName: "Patient ID", width: 100 },
      {
        field: "inPatient",
        headerName: "Inpatient",
        width: 100,
        renderCell: (isInpatient) => {
          return isInpatient.value ? <CheckRoundedIcon /> : <></>;
        },
      },
      {
        field: "sedation",
        headerName: "Sedation",
        width: 100,
        renderCell: (isSedation) => {
          return isSedation.value ? <CheckRoundedIcon /> : <></>;
        },
      },

      {
        field: "age",
        headerName: "Age",
        valueGetter: ({ value }) => value && new Number(value),
      },
      {
        headerName: "Protocol",
        field: "protocol",
        width: 400,
      },
      { headerName: "Weight", field: "weight" },
      { headerName: "Height", field: "height" },
      { headerName: "kV (Tube A)", field: "kV_a" },
      {
        headerName: "kV (Tube B)",
        field: "kV_b",
      },
      {
        headerName: "CTDI",
        field: "ctdi",
        renderCell: (ctdi) => {
          return ctdi.value ? (
            <div>
              {ctdi.value.map((protocol) => (
                <Chip
                  key={`ctdi-${protocol}`}
                  variant="outlined"
                  color="error"
                  label={protocol}
                />
              ))}
            </div>
          ) : (
            <></>
          );
        },
      },
      { headerName: "Site", field: "injectionSite" },
      { headerName: "Rate", field: "rate" },
      { headerName: "Volume", field: "volume" },
      {
        headerName: "Reporting Radiologists",
        field: "radiologists",
        width: 150,
        renderCell: (radiologists) => {
          return radiologists.value ? (
            <div>
              {radiologists.formattedValue.map((radiologist) => (
                <Chip
                  key={`radiologistid-${radiologist}`}
                  variant="outlined"
                  color="primary"
                  label={radiologist}
                />
              ))}
            </div>
          ) : (
            <></>
          );
        },
      },
      {
        headerName: "Actions items",
        field: "actions",
        type: "actions",
        width: 120,
        getActions: (params) => [
          <Link key="1" passHref href={`/Exam/${params.id}`}>
            <GridActionsCellItem icon={<PageviewIcon />} label="View" />
          </Link>,
          <Link key="2" passHref href={`/Forms/editForm/${params.id}`}>
            <GridActionsCellItem icon={<ModeEditIcon />} label="Edit" />
          </Link>,
          <Link key="3" passHref href={`/Search/${params.row.PID}`}>
            <GridActionsCellItem icon={<SearchIcon />} label="Edit">
              Look Up to this patient
            </GridActionsCellItem>
          </Link>,
        ],
      },
    ],
    [] //dep list
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
    paginationMode: paginationMode,
    onPageChange: (newPage) => {
      if (!isPreviousData) {
        setPageNumber((newPage += 1));
      }
    },
    rowCount: rowCount,
    components: { Toolbar: GridToolbar, Pagination: CustomPagination },
    loading: isLoading,
    pageSize: 25,
    components: {
      Toolbar: Toolbar,
    },
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
