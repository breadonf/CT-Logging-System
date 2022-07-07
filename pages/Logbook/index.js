import React from "react";
import dynamic from "next/dynamic";
import LogbookHistory from "../../components/Logbook/History/logbookHistory";
const NotebookForm = dynamic(
  () => import("../../components/Logbook/LogbookForm/newIndex"),
  { ssr: false }
);

function Logbook() {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      // you probably want to transform draftjs state to something else, but I'll leave that to you.
      alert(JSON.stringify(values, null, 2));
      console.log(values);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <NotebookForm handleSubmit={handleSubmit} />
      <LogbookHistory />
    </>
  );
}

export default Logbook;
