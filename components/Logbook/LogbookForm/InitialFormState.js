import React from "react";
import { EditorState } from "draft-js";

const INITIAL_FORM_STATE = {
  editorState: EditorState.createEmpty(),
  user: "",
  category: "",
  HTMLMessage: "",
};

export default INITIAL_FORM_STATE;