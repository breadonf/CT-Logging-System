import { DataGrid } from "@mui/x-data-grid";

const headers = [
  { field: "count", headerName: "Entry id" },
  { field: "Date", headerName: "Exam Date" },
  { field: "Inpatient", headerName: "Inpatient?" },
  { field: "PID", headerName: "Patient ID" },
  { field: "Age", headerName: "Age" },
  { field: "weight", headerName: "Weight" },
  { field: "height", headerName: "Height" },
  { field: "count", headerName: "Entry id" },
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
  console.log(records);
  return (
    <div
      className="min-w-full overflow-x-auto sm:-mx-6 lg:-mx-8"
      style={{ height: "80vh", width: "" }}
    >
      {isSuccess && (
        <DataGrid
          rows={records}
          columns={headers}
          getRowId={(row) => row.count}
        />
      )}
    </div>
  );
}
