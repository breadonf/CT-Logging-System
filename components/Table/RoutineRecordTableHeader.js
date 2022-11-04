import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Chip } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import Link from "next/link";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import PageviewIcon from "@mui/icons-material/Pageview";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";

export const RecordTableHeaders = [
  {
    headerName: "",
    field: "actions",
    type: "actions",
    width: 120,
    getActions: (params) => [
      <Link key="1" href={`/exam/${params.id}`}>
        <a>
          <GridActionsCellItem
            icon={
              <Tooltip title="View exam detail">
                <PageviewIcon />
              </Tooltip>
            }
            label="View"
          />
        </a>
      </Link>,
      <Link key="2" href={`/forms/editForm/${params.id}`}>
        <a>
          <GridActionsCellItem
            icon={
              <Tooltip title="Edit exam">
                <ModeEditIcon />
              </Tooltip>
            }
            label="Edit"
          />
        </a>
      </Link>,
      <Link key="3" href={`/general/search/${params.row.PID}`}>
        <a>
          <GridActionsCellItem
            icon={
              <Tooltip title="Search previous exam(s)">
                <SearchIcon />
              </Tooltip>
            }
            label="Edit"
          />
        </a>
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
    minWidth: 200,
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
    maxWidth: 100,
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
    minWidth: 180,
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
