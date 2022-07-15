import React from "react";
import { Formik, Form } from "formik";
import INITIAL_LOG_STATE from "./InitialLogState";
import LOG_VALIDATION from "./ValidationSchema";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Grid, Paper, Typography } from "@mui/material";
import DateTimePicker from "../../FormsUI/DateTimePicker";
import Textfield from "../../FormsUI/Textfield";
import Select from "../../FormsUI/Select";
import Checkbox from "../../FormsUI/Checkbox";
import categories from "./categories.json";
import ButtonWrapper from "./buttonWrapper";
import TextEditor from "../TextEditor";

function LogbookForm(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid item xs={10}>
          <Paper sx={{ px: 3, py: 3, minHeight: "40vh", my: 2 }}>
            <Formik
              validationSchema={LOG_VALIDATION}
              onSubmit={props.handleSubmit}
              initialValues={INITIAL_LOG_STATE}
            >
              {(formik) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <DateTimePicker name="inputDate" label="Input Date" />
                    </Grid>
                    <Grid item xs={4}>
                      <DateTimePicker
                        name="effectiveDate"
                        label="Effective Date"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Select
                        name="category"
                        label="Category"
                        options={categories}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Textfield name="inputUser" label="Your Name" />
                    </Grid>
                    <Grid item xs={4}>
                      <Textfield name="originatedBy" label="Originated By" />
                    </Grid>
                    <Grid item xs={2}>
                      <Checkbox name="important" label="Important" />
                    </Grid>
                    <Grid item xs={2}>
                      <Checkbox name="active" label="Active" />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sx={{ py: 3 }}>
                    <Typography component="label" sx={{ pb: 1 }}>
                      Message
                    </Typography>
                    <TextEditor
                      setFieldValue={(val) => {
                        formik.setFieldValue("messageEditorState", val);
                      }}
                      value={formik.values.messageEditorState}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="comments"
                      label="Follow Up Comments"
                      rows={2}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ButtonWrapper formik={formik} />
                  </Grid>
                </Form>
              )}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}

export default LogbookForm;
