import React, { useState } from "react";
import dynamic from "next/dynamic";
import { convertToRaw, ContentState, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)

const TextEditor = ({ value, setFieldValue }) => {
  const prepareDraft = (value) => {
    const draft = htmlToDraft(value);
    const contentState = ContentState.createFromBlockArray(draft.contentBlocks);
    const editorState = EditorState.createWithContent(contentState);
    return editorState;
  };

  const [editorState, setEditorState] = useState(
    value ? prepareDraft(value) : EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState) => {
    const forFormik = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setFieldValue(forFormik);
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