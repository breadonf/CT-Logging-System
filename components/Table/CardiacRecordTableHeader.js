import { Chip } from "@mui/material";
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
    ],
  },
  { field: "id", headerName: "Protocol id", width: 150 },
  { field: "PID", headerName: "Patient ID", width: 150 },
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

    width: 150,
  },
  {
    field: "radiologistInCharge",
    headerName: "Reporting Radiologist",

    width: 150,
  },
  {
    headerName: "Reporting Radiologists",
    field: "radiologistInCharge",

    width: 150,
    renderCell: (radiologists) => {
      return radiologists.value ? (
        <div>
          {radiologists.formattedValue.map((radiologist) => {
            return (
              <Chip
                key={`radiologistid-${radiologist}`}
                variant="outlined"
                color="primary"
                label={radiologist}
              />
            );
          })}
        </div>
      ) : (
        <></>
      );
    },
  },
];
