//Entry id
// Exam Date
// Patient ID
// Sedation
// Age
// Protocol
// Direct Post Contrast
// Site
// Rate
// Volume
// CTDI
// kV (Tube A)
// kV (Tube B)
// Reporting Radiologists

import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Chip } from "@mui/material";

export const RecordTableHeaders = [
  { accessorKey: "count", header: "Case ID" },
  {
    accessorKey: "Date",
    header: "Exam Date",
    Cell: ({ cell }) => {
      const valueFormatted = cell.getValue().split("T")[0];
      return valueFormatted;
    },
  },
  {
    accessorKey: "PID",
    header: "Patient ID",
    minSize: 100, //min size enforced during resizing
    maxSize: 200, //max size enforced during resizing
    size: 180, //medium column
  },

  {
    accessorKey: "age",
    header: "Age",
  },
  {
    header: "Protocol",
    accessorKey: "protocol",
    Cell: ({ cell }) => {
      return cell.getValue() ? (
        <div>
          {cell.getValue().map((protocol, i) => {
            return (
              <Chip
                key={`ctdi-${i}`}
                variant="outlined"
                color="primary"
                label={protocol}
              />
            );
          })}
        </div>
      ) : (
        <></>
      );
    },
  },
  {
    header: "Direct Post Contrast",
    accessorKey: "directPostContrast",
    Cell: ({ cell }) => (cell.getValue() ? <CheckRoundedIcon /> : <></>),
  },
  { header: "Site", accessorKey: "injectionSite" },
  { header: "Rate", accessorKey: "rate" },
  { header: "Volume", accessorKey: "volume" },
  { header: "CTDI", accessorKey: "ctdi", width: 60 },
  {
    header: "kV (Tube A)",
    accessorKey: "kV_a",
    Cell: ({ cell }) => {
      return cell.getValue() ? (
        <div>
          {cell.getValue().map((kV, i) => {
            return (
              <Chip
                key={`kV_a-${i}`}
                variant="outlined"
                color="primary"
                label={kV}
              />
            );
          })}
        </div>
      ) : (
        <></>
      );
    },
  },
  {
    header: "kV (Tube B)",
    accessorKey: "kV_b",
    Cell: ({ cell }) => {
      return cell.getValue() ? (
        <div>
          {cell.getValue().map((kV, i) => (
            <Chip
              key={`kV_b-${i}`}
              variant="outlined"
              color="primary"
              label={kV}
            />
          ))}
        </div>
      ) : (
        <></>
      );
    },
  },
  {
    header: "Reporting Radiologists",
    accessorKey: "radiologists",
    width: 150,
    Cell: ({ cell }) => {
      return cell.getValue() ? (
        <div>
          {cell.getValue().map((radiologist, i) => (
            <Chip
              key={`radiologist-${i}`}
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
