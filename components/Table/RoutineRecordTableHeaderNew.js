import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Chip } from "@mui/material";

export const RecordTableHeaders = [
  { accessorKey: "id", header: "Case ID" },
  {
    accessorKey: "Date",
    header: "Exam Date",
  },
  { accessorKey: "PID", header: "Patient ID" },
  {
    accessorKey: "sedatedBy",
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
