import { convertToHTML } from "draft-convert";

const preprocessorForLogBook = (values) => {
  const { editorState } = values;
  const HTMLMessage = convertToHTML(editorState.getCurrentContent());

  const modifiedValues = { ...values };
  modifiedValues.HTMLMessage = HTMLMessage;
  return modifiedValues;
};

export default preprocessorForLogBook;
