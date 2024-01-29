export const configDataGrid = {
  rows: data,
  booleanCell: () => {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
      </div>
    );
  },

  columns: headers,
  getRowId: (row) => row.count,
  paginationMode: paginationMode,
  onPageChange: (newPage) => {
    if (!isPreviousData) {
      ``;
      setPageNumber((newPage += 1));
    }
  },
  rowCount: rowCount,
  components: { Toolbar: GridToolbar, Pagination: CustomPagination },
  loading: isLoading,
  pageSize: 25,
  components: {
    Toolbar: Toolbar,
  },
};
