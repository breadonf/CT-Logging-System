import React from "react";
import Head from "next/head";
import { useQuery } from "react-query";
import { getHomepageCT, getHomepageProtocol } from "../queries/queries";
import TableMaterial from "../components/Table/TableMaterial";
import { useState } from "react";

export default function Table() {
  const [selectedProtocols, setSelectedProtocols] = useState([]);
  const { data: records, isSuccess } = useQuery(
    "record",
    async () => await getHomepageCT()
  );
  const getSelectedProtocols = (protocol) => {
    setSelectedProtocols(protocol);
    console.log(selectedProtocols);
  };
  return (
    <>
      <Head>
        <title>CT record</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <TableMaterial records={records} isSuccess={isSuccess} />
    </>
  );
}
