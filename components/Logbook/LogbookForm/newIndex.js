import React from "react";
import NOTE_VALIDATION from "./ValidationSchema";
import { Grid } from "@mui/material";
import { Formik, withFormik, Form } from "formik";
import Textfield from "../../FormsUI/Textfield";
import ButtonWrapper from "./buttonWrapper";
import { TextEditor } from "../TextEditor";
import { EditorState } from "draft-js";

const INITIAL_FORM_STATE = {
  editorState: EditorState.createEmpty(),
  user: "",
  category: "",
  HTMLMessage: "",
};

function NotebookForm(props) {
  return (
    <Grid container>
      <Grid item xs={10}>
        <Formik
          validationSchema={NOTE_VALIDATION}
          onSubmit={props.handleSubmit}
          initialValues={INITIAL_FORM_STATE}
        >
          {(formik) => (
            <Form>
              <Textfield name="username" label="Your Name" />
              <TextEditor
                editorState={formik.values.editorState}
                onChange={formik.setFieldValue}
                onBlur={formik.handleBlur}
              />
              <Grid container>
                <ButtonWrapper formik={formik} />
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}

export default NotebookForm;
