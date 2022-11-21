import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import PageviewIcon from "@mui/icons-material/Pageview";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Chip } from "@mui/material";
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
  { headerName: "Entry id", field: "count", width: 80 },
  {
    headerName: "Exam Date",
    field: "Date",
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
  { headerName: "Patient ID", field: "PID", width: 100 },
  {
    headerName: "Sedation",
    field: "sedatedBy",
    width: 90,
    renderCell: (sedatedBy) => {
      return sedatedBy.value ? <CheckRoundedIcon /> : <></>;
    },
  },

  {
    headerName: "Age",
    field: "age",
    width: 80,
    valueGetter: ({ value }) => value && new Number(value),
  },
  {
    headerName: "Protocol",
    field: "protocol",
    flex: true,
    minWidth: 250,
    renderCell: (protocol) => {
      return protocol.value ? (
        <div>
          {protocol.value.map((protocol) => (
            <div>
              <Chip
                key={`ctdi-${protocol}`}
                variant="outlined"
                color="primary"
                label={protocol.slice(2)}
              />
            </div>
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
    width: 120,
    renderCell: (isDirectPostContrast) => {
      return isDirectPostContrast.value ? <CheckRoundedIcon /> : <></>;
    },
    align: "center",
  },
  {
    headerName: "Injection Site",
    field: "injectionSite",
    width: 150,
    renderCell: (items) => {
      return items.value ? (
        items.value.startsWith("L") ? (
          <Chip
            label={items.value.slice(5)}
            color="primary"
            variant="outlined"
            avatar={<Avatar>L</Avatar>}
          />
        ) : items.value.startsWith("R") ? (
          <Chip
            label={items.value.slice(6)}
            color="secondary"
            variant="outlined"
            avatar={<Avatar>R</Avatar>}
          />
        ) : (
          <Chip label={items.value} color="default" variant="outlined" />
        )
      ) : (
        <></>
      );
    },
  },
  { headerName: "Rate", field: "rate", width: 60 },
  { headerName: "Volume", field: "volume" },

  { headerName: "CTDI", field: "ctdi", width: 60 },
  {
    headerName: "kV (A)",
    field: "kV_a",
    width: 70,
    renderCell: (items) => {
      return items.value ? (
        <div>
          {items.formattedValue.map((kVA) =>
            kVA.startsWith("Secondary") ? (
              <div>
                <Chip
                  key={`kVA-${kVA}`}
                  variant="outlined"
                  color="error"
                  label={kVA.slice(10)}
                />
              </div>
            ) : (
              <div>
                <Chip
                  key={`kVA-${kVA}`}
                  variant="outlined"
                  color="error"
                  label={kVA}
                />
              </div>
            )
          )}
        </div>
      ) : (
        <></>
      );
    },
  },

  {
    headerName: "kV (B)",
    field: "kV_b",
    width: 70,
    renderCell: (items) => {
      return items.value ? (
        <div>
          {items.formattedValue.map((kVB) =>
            kVA.startsWith("Secondary") ? (
              <div>
                <Chip
                  key={`kVB-${kVB}`}
                  variant="outlined"
                  color="error"
                  label={kVB.slice(10)}
                />
              </div>
            ) : (
              <div>
                <Chip
                  key={`kVB-${kVB}`}
                  variant="outlined"
                  color="error"
                  label={kVB}
                />
              </div>
            )
          )}
        </div>
      ) : (
        <></>
      );
    },
  },
  {
    headerName: "Reporting Radiologists",
    field: "radiologists",
    width: 250,
    renderCell: (radiologists) => {
      return radiologists.value ? (
        <div>
          {radiologists.formattedValue.map((radiologist) => (
            <div>
              <Chip
                key={`radiologistid-${radiologist}`}
                variant="outlined"
                color="primary"
                label={radiologist}
              />
            </div>
          ))}
        </div>
      ) : (
        <></>
      );
    },
  },
];
