import React from "react";
import Head from "next/head";
import LogbookForm from "../../../components/Logbook/LogbookForm";
import preprocessorForLogbook from "../../../components/Logbook/preprocessorForLogbook";

function LogbookFormPage() {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      const processedValues = preprocessorForLogbook(values);
      alert(JSON.stringify(processedValues, null, 2));
      console.log(processedValues);
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
