import { convertToHTML } from "draft-convert";
import { convertToRaw } from "draft-js";

const preprocessorMessage = (values) => {
  const editorStateValue = values.messageEditorState;
  const notRaw = editorStateValue.getCurrentContent();
  console.log("not Raw", notRaw);

  const rawContentForSaving = JSON.stringify(convertToRaw(notRaw));

  console.log("rawContentForSaving", rawContentForSaving);
  const htmlMessage = convertToHTML(editorStateValue.getCurrentContent());
  values.messageEditorState = rawContentForSaving;
  const processedValues = { ...values, htmlMessage };
  return processedValues;
};

export default preprocessorMessage;
