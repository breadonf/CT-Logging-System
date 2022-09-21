import { Box, Chip } from "@mui/material";

import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Chip } from "@mui/material";

export const RecordTableHeaders = [
  { accessorKey: "count", header: "Case ID" },
  {
    accessorKey: "Date",
    header: "Exam Date",
  },
  { accessorKey: "PID", header: "Patient ID" },
  {
    accessorKey: "sedation",
    header: "Sedation",
    width: 90,
    renderCell: (sedatedBy) => {
      return sedatedBy.value ? <CheckRoundedIcon /> : <></>;
    },
  },

  {
    accessorKey: "age",
    headerName: "Age",
  },
];
