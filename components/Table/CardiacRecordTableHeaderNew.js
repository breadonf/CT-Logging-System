import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Chip } from "@mui/material";

export const RecordTableHeaders = [
  {
    accessorKey: "date",
    header: "Exam Date",
    Cell: ({ cell }) => {
      const valueFormatted = cell.getValue()?.split("T")[0];
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

  { header: "Target HR", accessorKey: "targetHR" },
  { header: "Sedation", accessorKey: "sedation" },

  {
    header: "Reporting Radiologists",
    accessorKey: "radiologistInCharge",
    accessorFn: (originalRow) => {
      return originalRow.radiologistInCharge
        ? originalRow.radiologistInCharge
        : "no data";
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
