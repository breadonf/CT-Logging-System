import { convertToHTML } from "draft-convert";

const preprocessorForLogBook = (values) => {
  const editorStateValue = values.editorState;
  const htmlMessage = convertToHTML(editorStateValue.getCurrentContent());
  return htmlMessage;
};

export default preprocessorForLogBook;
