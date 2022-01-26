import { DataGrid } from "@mui/x-data-grid";

const headers = [
  { field: "count", headerName: "Entry id" },
  { field: "Date", headerName: "Exam Date" },
  {
    field: "Inpatient",
    headerName: "Inpatient",
    options: { booleanCell: true },
  },
  { field: "PID", headerName: "Patient ID" },
  { field: "Age", headerName: "Age" },
  { field: "weight", headerName: "Weight" },
  { field: "height", headerName: "Height" },
  {
    field: "Date_func",
    headerName: "Date of Exam",
    valueGetter: (params) => {
      let result = [];
      if (params.row.Date_func) {
        if (params.row.Date_func.year) {
          result.push(params.row.Date_func.year);
        }
        if (params.row.Date_func.month) {
          result.push(params.row.Date_func.month);
        }
        if (params.row.Date_func.day) {
          result.push(params.row.Date_func.day);
        }
      }
      return result.join("-");
    },
  },
  { field: "count", headerName: "Entry id" },
  { field: "count", headerName: "Entry id" },
  { field: "count", headerName: "Entry id" },
  "Patient ID",
  "Protocol",
  "Inpatient?",
  "Height",
  "Weight",
  "kV(tube A)",
  "kV(tube B)",
  "Contrast type",
  "Contrast rate",
  "Contrast volume",
  "Mode of injection",
  "Monitoring delay",
  "Monitoring interval",
  "Scan delay",
];

export default function TableMaterial({ records, isSuccess }) {
  return (
    <>
      {isSuccess && (
        <DataGrid
          autoHeight={true}
          rows={records}
          booleanCell={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              classNameName="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          columns={headers}
          pageSize={5}
          getRowId={(row) => row.count}
        />
      )}
    </>
  );
}
