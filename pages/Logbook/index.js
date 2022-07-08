import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import LogbookHistory from "../../components/Logbook/History/logbookHistory";
const LogbookForm = dynamic(
  () => import("../../components/Logbook/LogbookForm"),
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
      <Head>
        <title>CT Logbook</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <LogbookForm handleSubmit={handleSubmit} />
      <LogbookHistory />
    </>
  );
}

export default Logbook;
