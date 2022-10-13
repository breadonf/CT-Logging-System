import { EditorState, convertFromRaw } from "draft-js";
import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";

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

  const emptyContentState = convertFromRaw({
    entityMap: {},
    blocks: [
      {
        text: "",
        key: "foo",
        type: "unstyled",
        entityRanges: [],
      },
    ],
  });

  const [editorState, setEditorState] = useState(
    value ? value : EditorState.createWithContent(emptyContentState)
  );
  const [editor, setEditor] = useState(false);

  useEffect(() => {
    setTimeout(setEditor(true), 5000);
  }, [editorState]);

  const onEditorStateChange = (editorState) => {
    setFieldValue(editorState);
    setEditorState(editorState);
  };

  return (
    <div>
      {editor ? (
        <Editor
          editorState={editorState}
          wrapperClassName="custom-wrapper"
          editorClassName="custom-editor"
          toolbarClassName="toolbarClassName"
          onEditorStateChange={onEditorStateChange}
        />
      ) : null}
    </div>
  );
};

export default TextEditor;
