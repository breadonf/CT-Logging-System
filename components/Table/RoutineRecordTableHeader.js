import { Avatar, Chip } from "@mui/material";

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
          <Tooltip title="View exam detail">
            <PageviewIcon />
          </Tooltip>
        </a>
      </Link>,
      <Link key="2" href={`/forms/editForm/${params.id}`}>
        <a>
          <Tooltip title="Edit exam">
            <ModeEditIcon />
          </Tooltip>
        </a>
      </Link>,
      <Link key="3" href={`/general/search/${params.row.PID}`}>
        <a>
          <Tooltip title="Search previous exam(s)">
            <SearchIcon />
          </Tooltip>
        </a>
      </Link>,
    ],
  },
  { headerName: "Entry id", field: "count", width: 80, align: "center" },
  {
    headerName: "Exam Date",
    field: "Date",
    align: "center",
    type: "date",
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
  { headerName: "Patient ID", field: "PID", width: 100, align: "center" },
  {
    headerName: "Sedation",
    field: "sedatedBy",
    type: "boolean",
    width: 90,
  },
  {
    headerName: "Age",
    field: "age",
    type: "number",
    align: "center",
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
    align: "center",
    type: "boolean",
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
      ) : null;
    },
  },
  {
    headerName: "Rate",
    field: "rate",
    width: 60,
    renderCell: (items) => {
      return items.row.handInjection ? "H" : items.value;
    },
    valueGetter: (params) => (params.row.handInjection ? "H" : params.row.rate),
  },
  { headerName: "Volume", field: "volume", type: "number" },

  { headerName: "CTDI", field: "ctdi", width: 60, type: "number" },
  {
    headerName: "kV (A)",
    field: "kV_a",
    width: 70,
    renderCell: (items) => {
      return items.value && items.value.length != 0 ? (
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
      ) : null;
    },
    valueGetter: (params) =>
      params.row.kV_a?.length > 0 ? params.row.kV_a : null,
  },

  {
    headerName: "kV (B)",
    field: "kV_b",
    width: 70,
    renderCell: (items) => {
      return items.value && items.value.length != 0 ? (
        <div>
          {items.formattedValue.map((kVB) =>
            kVB.startsWith("Secondary") ? (
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
      ) : null;
    },
    valueGetter: (params) =>
      params.row.kV_b?.length > 0 ? params.row.kV_b : null,
  },
  {
    headerName: "Reporting Radiologists",
    field: "radiologists",
    width: 250,
    renderCell: (radiologists) => {
      return radiologists.row.radiologists ? (
        <div>
          {radiologists.row.radiologists.map((radiologist) => (
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
