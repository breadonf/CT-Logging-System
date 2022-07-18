import React from "react";
import Head from "next/head";
import MessageHistory from "../../components/Message/History/MessageHistory";

function Logbook() {

  return (
    <>
      <Head>
        <title>CT Message</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <MessageHistory />
    </>
  );
}

export default Logbook;
