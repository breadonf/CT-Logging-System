import React, { useState } from "react";
import dynamic from "next/dynamic";
import { EditorState } from "draft-js";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const TextEditor = ({ value, setFieldValue }) => {
  {
    /**  const prepareDraft = (value) => {
    const draft = htmlToDraft(value);
    const contentState = ContentState.createFromBlockArray(draft.contentBlocks);
    const editorState = EditorState.createWithContent(contentState);
    return editorState;
  };*/
  }

  const [editorState, setEditorState] = useState(
    value ? value : EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState) => {
    setFieldValue(editorState);
    setEditorState(editorState);
  };
  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName="custom-wrapper"
        editorClassName="custom-editor"
        toolbarClassName="toolbarClassName"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
};

export default TextEditor;
