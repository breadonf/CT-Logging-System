import { Chip, IconButton, Tooltip } from "@mui/material";

import AssessmentIcon from "@mui/icons-material/Assessment";
import Link from "next/link";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import PageviewIcon from "@mui/icons-material/Pageview";
import SearchIcon from "@mui/icons-material/Search";

function onClickHandler(data) {
  const { row } = data;
  navigator.clipboard.writeText(
    `Scan Technique:
    ${row?.scanTechnique ?? ""}

    Scan delay at ${
      row?.delayTime ?? ""
    } sec by manual/auto trigger/ test bolus with ROI in ${
      row?.depictionOfROI ?? ""
    }
    Scanning heart rate:
    Min: ${row.heartRate?.min ?? ""}
    Max: ${row.heartRate?.max ?? ""}
    Avg: ${row.heartRate?.average ?? ""}
    Heart rate variability: ${row.heartRate?.variance ?? ""}

    Contrast Injection Regime:
    Angiocath site:                         ml(100%) + ml(50%) + ml NS @ ml/sec
    Body Weight:   kg
    Body Height:    cm
    `
  );
}

export const RecordTableHeaders = [
  {
    headerName: "",
    field: "actions",
    type: "actions",

    width: 150,
    getActions: (params) => [
      <Link key="1" passHref href={`/cardiac/protocol/${params.id}`}>
        <a>
          <Tooltip title="View exam detail">
            <PageviewIcon />
          </Tooltip>
        </a>
      </Link>,
      <Link key="2" passHref href={`/forms/editCardiacSetup/${params.id}`}>
        <a>
          <Tooltip title="Edit exam">
            <ModeEditIcon />
          </Tooltip>
        </a>
      </Link>,
      <Link key="3" passHref href={`/cardiac/table/${params.row.PID}`}>
        <a>
          <Tooltip title="Search previous exam(s)">
            <SearchIcon />
          </Tooltip>
        </a>
      </Link>,
      <Tooltip title="Report template">
        <IconButton
          onClick={() => {
            onClickHandler(params);
          }}
        >
          <AssessmentIcon />
        </IconButton>
      </Tooltip>,
    ],
  },
  { field: "id", headerName: "Protocol ID", width: 100 },
  { field: "PID", headerName: "Patient ID", width: 100 },
  { field: "name", headerName: "Patient Name", width: 150 },
  {
    field: "date_func",
    headerName: "Exam Date",

    width: 150,

    valueFormatter: (params) => {
      if (
        typeof params.values?.year === "undefined" ||
        params.values?.year === null
      ) {
        return "";
      }

      return `${params.values.year}-${params.values.month}-${params.values.day} `;
    },
  },
  {
    field: "sedation",
    headerName: "Sedation",

    width: 120,
  },
  {
    field: "radiologistInCharge",
    headerName: "Reporting Radiologist",

    width: 150,
  },
  {
    headerName: "Reporting Radiologists",
    field: "radiologistInCharge",

    width: 250,
    renderCell: (radiologists) => {
      return radiologists.value ? (
        <div>
          {radiologists.formattedValue.map((radiologist) => {
            return (
              <div key={`radiologistid-${radiologist}`}>
                <Chip variant="outlined" color="primary" label={radiologist} />
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      );
    },
  },
];
