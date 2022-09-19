import { Box, Chip } from "@mui/material";

import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import Link from "next/link";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import PageviewIcon from "@mui/icons-material/Pageview";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";

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
    Cell: ({ cell }) => {
      console.log(cell);
      return cell.getValue() ? (
        <Box>
          <CheckRoundedIcon />
        </Box>
      ) : (
        <Box></Box>
      );
    },

    filterFn: "weakEquals",
    filterSelectOptions: [
      { text: "True", value: true },
      { text: "False", value: null | false },
    ],
    filterVariant: "select",
  },

  {
    accessorKey: "age",
    headerName: "Age",
  },
];
