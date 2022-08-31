import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import PageviewIcon from "@mui/icons-material/Pageview";
import SearchIcon from "@mui/icons-material/Search";
import { Chip } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { GridActionsCellItem } from "@mui/x-data-grid";
import Link from "next/link";

export const RecordTableHeaders = [
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
    field: "sedatedBy",
    headerName: "Sedation",
    width: 90,
    renderCell: (sedatedBy) => {
      return sedatedBy.value ? <CheckRoundedIcon /> : <></>;
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
    headerName: "Direct Post Contrast",
    field: "directPostContrast",
    renderCell: (isDirectPostContrast) => {
      return isDirectPostContrast.value ? <CheckRoundedIcon /> : <></>;
    },
    align: "center",
  },
  { headerName: "Site", field: "injectionSite" },
  { headerName: "Rate", field: "rate" },
  { headerName: "Volume", field: "volume" },

  { field: "ctdi", headerName: "CTDI", width: 60 },
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
];
