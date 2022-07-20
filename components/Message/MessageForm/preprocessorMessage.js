import { convertToHTML } from "draft-convert";

const preprocessorMessage = (values) => {
  const editorStateValue = values.messageEditorState;
  const htmlMessage = convertToHTML(editorStateValue.getCurrentContent());
  const processedValues = {...values, htmlMessage};
  return processedValues;
};

export default preprocessorMessage;
