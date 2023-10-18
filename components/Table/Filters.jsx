import { Button, Container, Grid, Paper } from "@mui/material";
import { Form, Formik } from "formik";

import React from "react";
import TextfieldWrapper from "../FormsUI/Textfield";
import { useRouter } from "next/router";

export default function Filters({ endpoint }) {
  const router = useRouter();
  const handleSearch = async (values) => {
    const keywords = values?.search ?? "";
    router.push(`/${endpoint}/${keywords}`);
  };
  const ini_value = {
    search: "",
  };
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      // Prevent's default 'Enter' behavior.
      handleSearch(event.target.value);
      // your handler code
      // Temp fixes
      // For preventing pressing enter when in autocomplete to prevent inputting string value to the field without processing to array
    }
  };
  return (
    <Grid spacing={2} sx={{ py: 5 }} container>
      <Grid item xs={12}>
        <Container sx={{ maxWidth: "80%" }} maxWidth={false}>
          <Paper
            elevation={12}
            sx={{ px: 3, py: 5, bgcolor: "#F0F3BD", minHeight: "90" }}
          >
            <Grid container>
              <Grid item xs={12}>
                <Formik initialValues={ini_value} onSubmit={handleSearch}>
                  {/* TODO validation on empty value */}

                  <Form>
                    <Grid
                      container
                      spacing={1}
                      component={"div"}
                      sx={{
                        py: 4,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Grid item xs={8}>
                        <TextfieldWrapper
                          name="search"
                          label="Search any keywords/ related information"
                          onKeyDown={onKeyDown}
                        />
                      </Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={2}>
                        <Button
                          variant="contained"
                          type="submit"
                          value="Submit"
                          fullWidth
                        >
                          Search
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                </Formik>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}
