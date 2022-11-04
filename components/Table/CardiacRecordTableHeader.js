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
      <Link key="1" passHref href={`/cardiac/protocol/${params.id}`}>
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
      <Link key="2" passHref href={`/forms/editCardiacSetup/${params.id}`}>
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
      <Link key="3" passHref href={`/cardiac/table/${params.row.PID}`}>
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
  { field: "id", headerName: "Protocol id" },
  { field: "PID", headerName: "Patient ID", width: 100 },
  { field: "name", headerName: "Patient Name", width: 100 },
  {
    field: "date_func",
    headerName: "Exam Date",
    width: 100,
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
    width: 90,
  },
  {
    field: "radiologistInCharge",
    headerName: "Reporting Radiologist",
    width: 100,
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
                label={radiologist.match(/(.*) (\(.*\))/)[1]}
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
