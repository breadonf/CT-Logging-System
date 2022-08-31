import { Container, Grid, Paper } from "@mui/material";
import Filters from "../../components/Table/Filters";

export default function searchIndex() {
  return (
    <Grid sx={{ py: 3 }} container>
      <Grid item xs={12}>
        <Container sx={{ maxWidth: "80%" }} maxWidth={false}>
          <Paper
            elevation={12}
            sx={{
              p: 3,
              height: "85vh",
              bgcolor: "#F0F3BD",
              overflowY: "auto",
            }}
          >
            <Filters endpoint="cardiac/table" />
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}
