import Filters from "../../components/Table/Filters";
import { Paper, Grid, Container } from "@mui/material";

export default function searchIndex() {
  return (
    <Grid spacing={2} sx={{ py: 5 }} container>
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
            <Filters />
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}
