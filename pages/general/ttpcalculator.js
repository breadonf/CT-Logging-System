import Head from "next/head";
import React from "react";
import TTPCalculatorFrom from "../../components/Forms/TTPCalculatorForm";
import { getHomepageCTUnlimited } from "../../queries/queries";
import getTop10 from "~/helpers/getTop10";
import { useQuery } from "react-query";

function TTPCalculator() {
  const [top10Values, setTop10Values] = React.useState(null);

  const records = useQuery(
    ["record"],
    async () => await getHomepageCTUnlimited()
  );

  const handleSubmit = (values) => {
    top10Values = getTop10(records.data, values.rate, values.weight);
    setTop10Values(top10Values);
    console.log(top10Values);
  };
  return (
    <>
      <Head>
        <title>TTP Calculator</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <TTPCalculatorFrom
        handleSubmit={handleSubmit}
        top10Values={top10Values}
      />
    </>
  );
}

export default TTPCalculator;
