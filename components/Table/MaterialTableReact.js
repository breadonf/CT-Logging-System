import { createTheme, ThemeProvider, useTheme } from "@mui/material";
import { useMemo } from "react";

import MaterialReactTable from "material-react-table";
import { useMemo } from "react";

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

  const globalTheme = useTheme(); //(optional) if you already have a theme defined in your app root, you can import here

  const tableTheme = useMemo(
    () =>
      createTheme({
        height: {},
        palette: {
          primary: globalTheme.palette.secondary, //swap in the secondary color as the primary for the table
          info: {
            main: "rgb(255,122,0)", //add in a custom color for the toolbar alert background stuff
          },
          background: {
            default: "#F0F3BD", //pure black table in dark mode for fun
          },
        },
        typography: {
          button: {
            textTransform: "none", //customize typography styles for all buttons in table by default
            fontSize: "1.2rem",
          },
        },
        components: {
          MuiTooltip: {
            styleOverrides: {
              tooltip: {
                fontSize: "1.1rem", //override to make tooltip font size larger
              },
            },
          },
          MuiSwitch: {
            styleOverrides: {
              thumb: {
                color: "pink", //change the color of the switch thumb in the columns show/hide menu to pink
              },
            },
          },
        },
      }),
    [globalTheme]
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
    muiTableContainerProps: { sx: { maxHeight: "65vh" } },
    muiTableProps: { sx: { overflow: "auto" } },
    enableStickyHeader: true,
  };
  return (
    <>
      {isSuccess && (
        <ThemeProvider theme={tableTheme}>
          <div style={{ maxHeight: height }}>
            <MaterialReactTable {...configDataGrid} />
          </div>
        </ThemeProvider>
      )}
    </>
  );
}
