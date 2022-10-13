import { Divider, Grid, Paper, Typography } from "@mui/material";
import { Form, Formik } from "formik";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import ButtonWrapper from "./buttonWrapper";
import Checkbox from "../../FormsUI/Checkbox";
import DateTimePicker from "../../FormsUI/DateTimePicker";
import INITIAL_MESSAGE_STATE from "./InitialMessageState";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MESSAGE_VALIDATION from "./ValidationSchema";
import React from "react";
import Select from "../../FormsUI/Select";
import TextEditor from "../TextEditor";
import Textfield from "../../FormsUI/Textfield";
import categories from "./categories.json";

function MessageForm(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Formik
        validationSchema={MESSAGE_VALIDATION}
        onSubmit={props.handleSubmit}
        initialValues={props.data ? props.data : INITIAL_MESSAGE_STATE}
      >
        {(formik) => (
          <Form>
            <Grid container spacing={2} sx={{ height: "90vh", py: 3 }}>
              <Grid item xs={12}>
                <Paper
                  elevation={12}
                  sx={{
                    p: 3,
                    height: "85vh",
                    bgcolor: "#FFFFFF",
                    overflowY: "auto",
                  }}
                >
                  <Grid item xs={12}>
                    <Typography variant="h3" align="center" color="#093A3E">
                      New Message
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider sx={{ pt: 10 }} />
                  </Grid>
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
                      multiline
                      name="comments"
                      label="Follow Up Comments"
                      rows={2}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ButtonWrapper formik={formik} />
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </LocalizationProvider>
  );
}

export default MessageForm;
