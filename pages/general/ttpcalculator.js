import React from "react";
import Head from "next/head";
import TTPCalculatorFrom from "../../components/Forms/TTPCalculatorForm";

function TTPCalculator() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <Head>
        <title>TTP Calculator</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <TTPCalculatorFrom handleSubmit={handleSubmit} />
    </>
  );
}

export default TTPCalculator;
