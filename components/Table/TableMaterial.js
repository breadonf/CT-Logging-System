import { DataGrid } from "@mui/x-data-grid";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
const headers = [
  { field: "count", headerName: "Entry id" },
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
  {
    field: "inPatient",
    headerName: "Inpatient",
    renderCell: (isInpatient) => {
      return isInpatient.value ? <CheckRoundedIcon /> : <></>;
    },
  },

  { field: "PID", headerName: "Patient ID", flex: 0.05 },
  { field: "age", headerName: "Age" },
  {
    headerName: "Protocol",
    field: "protocol",
    flex: 0.2,
    renderCell: (protocols) => {
      return protocols.value ? protocols.value.join(", ") : <></>;
    },
  },
  { headerName: "Weight", field: "weight" },
  { headerName: "Height", field: "height" },
  { headerName: "kV (Tube A)", field: "kV_a" },
  { headerName: "kV (Tube B)", field: "kV_b" },

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
        <div style={{ height: "80vh" }}>
          <DataGrid
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
            getRowId={(row) => row.count}
            autoPageSize
          />
        </div>
      )}
    </>
  );
}
