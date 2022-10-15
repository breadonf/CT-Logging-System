import React from "react";
import FormSelection from "../../components/FormSelection";
import Head from "next/head";

export default function Forms() {
  return (
    <>
      <Head>
        <title>CT Logging System</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <FormSelection />
    </>
  );
}
