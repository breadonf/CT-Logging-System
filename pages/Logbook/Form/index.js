import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import LogbookForm from "../../../components/Logbook/LogbookForm";

function LogbookFormPage() {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>CT Add Log</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <LogbookForm handleSubmit={handleSubmit} />
    </>
  );
}

export default LogbookFormPage;
