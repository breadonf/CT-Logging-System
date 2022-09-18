export const RecordTableHeaders = [
  { accessorKey: "id", header: "Entry id" },
  { accessorKey: "name", header: "Patient Name", enableClickToCopy: true },
  { accessorKey: "date", header: "Exam Date", enableGrouping: true },
  { accessorKey: "sedation", header: "Sedation" },
  {
    id: "ScanMode",
    header: "Scan Mode",
    enableGrouping: false,
    columns: [
      {
        accessorKey: "scanMode.HRDependent",
        header: "HRDependent ?",
        enableGrouping: false,
      },
      { accessorKey: "scanMode.Flash", header: "Flash", enableGrouping: false },
      {
        accessorKey: "scanMode.ss.status",
        header: "SS",
        enableGrouping: false,
      },
    ],
  },
];
