import { Container, Grid, Paper } from "@mui/material";

function WithPaperWrapper({ children }) {
  return (
    <Container sx={{ pt: 1, pb: 2 }} maxWidth="lg">
      <Grid container sx={{ minHeight: "85vh", justifyContent: "center" }}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper
                sx={{
                  boxShadow: 4,
                  height: "85vh",
                  p: 20,
                  mt: 2,
                  bgcolor: "#F0F3BD",
                }}
              >
                {children}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default WithPaperWrapper;
