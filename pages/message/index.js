import Head from "next/head";
import { LoadingSpinner } from "../../components/Forms/LoadingSpinner";
import MessageHistory from "../../components/Message/History/MessageHistory";
import React from "react";
import { getMessageData } from "../../queries/queries";
import { useQuery } from "react-query";
import { useSession } from "next-auth/react";

function Logbook() {
  const { status } = useSession();
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
      {isLoading && <LoadingSpinner bgColor="#222222" />}
      {isSuccess && <MessageHistory data={message} status={status} />}
    </>
  );
}

export default Logbook;
