import React from "react";
import Head from "next/head";
import MessageHistory from "../../components/Message/History/MessageHistory";
import { getMessageData } from "../../queries/queries";
import { useQuery } from "react-query";
import { LoadingSpinner } from "../../components/Forms/CardiacForm/LoadingSpinner";
function Logbook() {
  const { data: message, isSuccess, isLoading } = useQuery(
    "message",
    async () => await getMessageData()
  );
  return (
    <>
      <Head>
        <title>CT Message</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {isLoading && <LoadingSpinner />}
      {isSuccess && <MessageHistory data={message} />}
    </>
  );
}

export default Logbook;
