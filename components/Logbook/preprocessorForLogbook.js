import { convertFromHTML } from "draft-convert";

const preprocessorForLogBook = (values) => {
  const { editorState } = values;
  const HTMLMessage = convertFromHTML(editorState.getCurrentContent());

  const modifiedValues = { ...values };
  modifiedValues.HTMLMessage = HTMLMessage;
  return modifiedValues;
};

export default preprocessorForLogBook;
