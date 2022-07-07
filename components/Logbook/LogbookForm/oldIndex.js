import React from "react";
import { Grid, Paper } from "@mui/material";
import { withFormik } from "formik";
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
import { TextEditor } from "../TextEditor";
import Select from "../../FormsUI/Select";
import categories from "./categories.json";
import preprocessorForLogBook from "../preprocessorForLogbook";

const formikEnhancer = withFormik({
  mapPropsToValues: (props) => ({
    editorState: EditorState.createEmpty(),
    user: "",
    category: "",
    HTMLMessage: ""
  }),

  handleSubmit: (values, { setSubmitting }) => {
    const modifiedValues = preprocessorForLogBook(values);

    setTimeout(() => {
      const content = convertToHTML(values.editorState.getCurrentContent());
      // you probably want to transform draftjs state to something else, but I'll leave that to you.
      alert(JSON.stringify(values, null, 2));
      console.log(values);
      console.log(modifiedValues);
      setSubmitting(false);
    }, 1000);
  },
  displayName: "MyForm",
});

const LogbookForm = ({
  values,
  touched,
  dirty,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  setFieldValue,
  isSubmitting,
}) => (
  <Grid container spacing={2} sx={{ justifyContent: "center" }}>
    <Grid item xs={10}>
      <Paper sx={{ px: 3, py: 3, minHeight: "40vh", my: 2 }}>
        <form onSubmit={handleSubmit}>
          <label style={{ display: "block" }}>Name</label>
          <input
            id="user"
            placeholder="Your Name..."
            type="text"
            value={values.user}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label style={{ display: "block" }}>Category</label>
          <Select
            name="category"
            label="category"
            options={categories}
          />
          <label style={{ display: "block", marginTop: ".5rem" }}>Note</label>
          <TextEditor
            editorState={values.editorState}
            onChange={setFieldValue}
            onBlur={handleBlur}
          />
          <button
            type="button"
            className="outline"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >
            Reset
          </button>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      </Paper>
    </Grid>
  </Grid>
);

const EnhancedLogbookForm = formikEnhancer(LogbookForm);

export default EnhancedLogbookForm;
