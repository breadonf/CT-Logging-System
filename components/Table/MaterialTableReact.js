import { ThemeProvider, createTheme, useTheme } from "@mui/material";

import MaterialReactTable from "material-react-table";

export default function TableMaterialReact({
  records,
  isSuccess,
  columnHeaders,
  setPagination,
  pagination,
  height = "80vh",
  ...otherProps
}) {
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
    columns: columnHeaders,
    data: records,
    // enableClickToCopy: true,
    // enableColumnActions: true,
    // enableColumnFilterModes: true,
    // enableColumnOrdering: true,
    // enablePinning: true,
    // enableRowActions: true,
    // enableRowSelection: true,
    initialState: { showColumnFilters: true },
    //muiTableContainerProps: { sx: { maxHeight: "65vh" } },
    // muiTableProps: { sx: { overflow: "auto" } },
    // onPaginationChange: setPagination,
    // state: { pagination: pagination },
    ...otherProps,
  };
  return (
    <>
      {
        <ThemeProvider theme={tableTheme}>
          <div style={{ maxHeight: height }}>
            <MaterialReactTable {...configDataGrid} />
          </div>
        </ThemeProvider>
      }
    </>
  );
}
