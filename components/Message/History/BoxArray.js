import { EditorState, convertFromRaw } from "draft-js";

import { Grid } from "@mui/material";
import MessageCard from "./MessageCard";
import React from "react";

function BoxArray({ data }) {
  return (
    <>
      {Object.values(data).map((value, index) => {
        const updatedContentState = value.messageEditorState;
        console.log("value in message history", updatedContentState);

        const contentState = convertFromRaw(updatedContentState);
        const editorState = EditorState.createWithContent(contentState);
        value.messageEditorState = editorState;
        return (
          <div key={index}>
            {value.active ? (
              <Grid item xs={12} sx={{ pb: 1 }}>
                <MessageCard messageDetail={value} />
              </Grid>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </>
  );
}

export default BoxArray;
