import React from "react";
import Head from "next/head";
import MessageForm from "../../../components/Message/MessageForm";
import preprocessorMessage from "../../../components/Message/MessageForm/preprocessorMessage";

function MessageFormPage() {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      const processedValues = preprocessorMessage(values);
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
      <MessageForm handleSubmit={handleSubmit} />
    </>
  );
}

export default MessageFormPage;
