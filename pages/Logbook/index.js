import React from "react";
import LogbookHistory from "../../components/Logbook/History/logbookHistory";
import EnhancedLogbookForm from "../../components/Logbook/LogbookForm";

function Logbook() {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      const content = convertToHTML(values.editorState.getCurrentContent());
      // you probably want to transform draftjs state to something else, but I'll leave that to you.
      alert(JSON.stringify(values, null, 2));
      console.log(content);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <EnhancedLogbookForm handleSubmit={handleSubmit} />
      <LogbookHistory />
    </>
  );
}

export default Logbook;
