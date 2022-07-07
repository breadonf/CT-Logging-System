import React from "react";
import dynamic from "next/dynamic";
import NOTE_VALIDATION from "./ValidationSchema";
import { Grid, Paper, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import Textfield from "../../FormsUI/Textfield";
import Select from "../../FormsUI/Select";
import categories from "./categories.json";
import ButtonWrapper from "./buttonWrapper";
const NewTextEditor = dynamic(() => import("../TextEditor/NewTextEditor"), {
  ssr: false,
});

const INITIAL_FORM_STATE = {
  username: "",
  category: "",
  HTMLMessage: "",
  message: "",
};

function NotebookForm(props) {
  return (
    <Grid container spacing={2} sx={{ justifyContent: "center" }}>
      <Grid item xs={10}>
        <Paper sx={{ px: 3, py: 3, minHeight: "40vh", my: 2 }}>
          <Formik
            validationSchema={NOTE_VALIDATION}
            onSubmit={props.handleSubmit}
            initialValues={INITIAL_FORM_STATE}
          >
            {(formik) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Textfield name="username" label="Your Name" />
                  </Grid>
                  <Grid item xs={6}>
                    <Select
                      name="category"
                      label="category"
                      options={categories}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ py: 2 }}>
                  <Typography component="label" sx={{ pb: 1 }}>
                    Message
                  </Typography>
                  <NewTextEditor
                    setFieldValue={(val) =>
                      formik.setFieldValue("message", val)
                    }
                    value={formik.values.message}
                  />
                </Grid>
                <ButtonWrapper formik={formik} />
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default NotebookForm;
