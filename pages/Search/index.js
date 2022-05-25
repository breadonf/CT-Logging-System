import Filters from "../../components/Table/Filters";
import { Paper } from "@mui/material";

export default function searchIndex() {
  return (
    <Paper
      elevation={12}
      sx={{ px: 3, py: 5, bgcolor: "#F0F3BD", minHeight: "90vh" }}
    >
      <Filters />
    </Paper>
  );
}
