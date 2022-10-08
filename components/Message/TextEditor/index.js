import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { EditorState, convertFromRaw } from "draft-js";

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

  const [editorState, setEditorState] = useState(null);

  const [editor, seteditor] = useState(false);

  useEffect(() => {
    setTimeout(seteditor(true), 5000);
    setEditorState(
      editorState ? value : EditorState.createWithContent(emptyContentState)
    );
  }, []);

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
