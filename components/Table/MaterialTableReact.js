import { useMemo, useState } from "react";

import MaterialReactTable from "material-react-table";

export default function TableMaterialReact({
  records,
  isSuccess,
  columnHeaders,
  height = "80vh",
}) {
  const headers = useMemo(
    () => columnHeaders,
    [columnHeaders] //dep list
  );

  const configDataGrid = {
    columns: headers,
    data: records,
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enablePinning: true,
    enableRowActions: true,
    enableRowSelection: true,
    initialState: { showColumnFilters: true },
  };
  return (
    <>
      {isSuccess && (
        <div style={{ height: height }}>
          <MaterialReactTable {...configDataGrid} />
        </div>
      )}
    </>
  );
}
