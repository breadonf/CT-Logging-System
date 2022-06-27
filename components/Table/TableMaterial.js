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
import Tooltip from "@mui/material/Tooltip";
import Search from "@mui/icons-material/Search";

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
      {
        headerName: "",
        field: "actions",
        type: "actions",
        width: 120,
        getActions: (params) => [
          <Link key="1" passHref href={`/Exam/${params.id}`}>
            <GridActionsCellItem
              icon={
                <Tooltip title="View exam detail">
                  <PageviewIcon />
                </Tooltip>
              }
              label="View"
            />
          </Link>,
          <Link key="2" passHref href={`/Forms/editForm/${params.id}`}>
            <GridActionsCellItem
              icon={
                <Tooltip title="Edit exam">
                  <ModeEditIcon />
                </Tooltip>
              }
              label="Edit"
            />
          </Link>,
          <Link key="3" passHref href={`/Search/${params.row.PID}`}>
            <GridActionsCellItem
              icon={
                <Tooltip title="Search previous exam(s)">
                  <SearchIcon />
                </Tooltip>
              }
              label="Edit"
            >
              Look Up to this patient
            </GridActionsCellItem>
          </Link>,
        ],
      },
      { field: "count", headerName: "Entry id" },
      {
        field: "Date",
        headerName: "Exam Date",
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
        field: "sedation",
        headerName: "Sedation",
        width: 90,
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
        flex: true,
        maxWidth: 300,
        minWidth: 100,
        renderCell: (protocol) => {
          return protocol.value ? (
            <div>
              {protocol.value.map((protocol) => (
                <Chip
                  key={`ctdi-${protocol}`}
                  variant="outlined"
                  color="primary"
                  label={protocol}
                />
              ))}
            </div>
          ) : (
            <></>
          );
        },
      },
      {
        headerName: "Pre Contrast done?",
        field: "directPostContrast",
        renderCell: (isDirectPostContrast) => {
          return isDirectPostContrast.value ? <CheckRoundedIcon /> : <></>;
        },
        align: "center",
      },
      { headerName: "Site", field: "injectionSite" },
      { headerName: "Rate", field: "rate" },
      { headerName: "Volume", field: "volume" },
      {
        headerName: "kV (Tube A)",
        field: "kV_a",
        renderCell: (items) => {
          return items.value ? (
            <div>
              {items.formattedValue.map((kVA) => (
                <Chip
                  key={`kVA-${kVA}`}
                  variant="outlined"
                  color="error"
                  label={kVA}
                />
              ))}
            </div>
          ) : (
            <></>
          );
        },
      },
      {
        headerName: "kV (Tube B)",
        field: "kV_b",
        renderCell: (items) => {
          return items.value ? (
            <div>
              {items.formattedValue.map((kVB) => (
                <Chip
                  key={`kVB-${kVB}`}
                  variant="outlined"
                  color="error"
                  label={kVB}
                />
              ))}
            </div>
          ) : (
            <></>
          );
        },
      },
      {
        headerName: "kV (Tube B)",
        field: "kV_b",
        renderCell: (items) => {
          return items.value ? (
            <div>
              {items.formattedValue.map((kVB) => (
                <Chip
                  key={`kVB-${kVB}`}
                  variant="outlined"
                  color="error"
                  label={kVB}
                />
              ))}
            </div>
          ) : (
            <></>
          );
        },
      },
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
