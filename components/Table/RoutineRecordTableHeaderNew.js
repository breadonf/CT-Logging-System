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
  {
    accessorKey: "count",
    header: "Case ID",
    maxSize: 150,
    enableColumnFilterModes: false,
  },
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
    accessorFn: (originalRow) => {
      return originalRow.age ? originalRow.age : "no data";
    },
    header: "Age",
    filterFn: "betweenInclusive",
    columnFilterModeOptions: ["betweenInclusive", "greaterThan", "lessThan"],
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
    accessorFn: (originalRow) => {
      return originalRow.directPostContrast ? "true" : "false";
    },
    filterVariant: "checkbox",
    Cell: ({ cell }) => {
      return cell.getValue() === "true" ? <CheckRoundedIcon /> : <></>;
    },
    minSize: 250,
  },
  { header: "Site", accessorKey: "injectionSite" },
  { header: "Rate", accessorKey: "rate" },
  { header: "Volume", accessorKey: "volume" },
  {
    header: "CTDI",
    accessorKey: "ctdi",
    width: 60,
    accessorFn: (originalRow) => {
      return originalRow.ctdi ? originalRow.ctdi : "no data";
    },
  },
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
                color="secondary"
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
    accessorFn: (originalRow) => {
      return originalRow.radiologists ? originalRow.radiologists : "no data";
    },
    filterFn: "equals",
    filterSelectOptions: [
      { text: "W P Cheung", value: "W P Cheung" },
      { text: "E Kan, Elaine", value: "E Kan, Elaine" },
      { text: "W K Ng, Carol", value: "W K Ng, Carol" },
    ],
    filterVariant: "select",
    minSize: 250,
    Cell: ({ cell }) => {
      return cell.getValue() && Array.isArray(cell.getValue()) ? (
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
