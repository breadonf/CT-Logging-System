import Head from "next/head";
import React from "react";
import FormSelection from "../components/FormSelection";

function index() {
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

export default index;
