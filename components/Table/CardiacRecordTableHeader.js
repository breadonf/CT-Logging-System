import Tooltip from "@mui/material/Tooltip";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Link from "next/link";
import PageviewIcon from "@mui/icons-material/Pageview";
import SearchIcon from "@mui/icons-material/Search";
import { GridActionsCellItem } from "@mui/x-data-grid";

export const RecordTableHeaders = [
  {
    headerName: "",
    field: "actions",
    type: "actions",
    width: 120,
    getActions: (params) => [
      <Link key="1" passHref href={`/cardiac/protocol/${params.id}`}>
        <GridActionsCellItem
          icon={
            <Tooltip title="View exam detail">
              <PageviewIcon />
            </Tooltip>
          }
          label="View"
        />
      </Link>,
      <Link key="2" passHref href={`/Forms/editCardiacSetup/${params.id}`}>
        <GridActionsCellItem
          icon={
            <Tooltip title="Edit exam">
              <ModeEditIcon />
            </Tooltip>
          }
          label="Edit"
        />
      </Link>,
      <Link key="3" passHref href={`/cardiac/table/${params.row.PID}`}>
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
  { field: "id", headerName: "Protocol id" },
  {
    field: "date",
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
  },
];
