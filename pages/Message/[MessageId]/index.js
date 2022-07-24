import React from "react";
import Head from "next/head";
import MessageForm from "/components/Message/MessageForm";
import preprocessorMessage from "/components/Message/MessageForm/preprocessorMessage";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import setData from "/helpers/setData";
import { updateMessageById } from "/queries/mutations";
import { getMessageByID } from "/queries/queries";

function MessageEditPage() {
  const router = useRouter;
  const { MessageId } = router.query;
  const {
    data: fetchedData,
    isLoading: isQueryLoading,
    isSuccess: isQuerySuccess,
    isError,
  } = useQuery(
    ["MessageByID", MessageId],
    async () => await getMessageByID(parseInt(ExamId)),
    {
      retry: true,
      refetchOnMount: "always",
      cacheTime: 1,
    }
  );
  const mutation = useMutation(
    (newFormData) => {
      setData(
        updateMessageById,
        {
          data: newFormData.data,
          updateMessageId: newFormData.updateMessageId,
        },
        true
      );
    },
    {
      mutationKey: "updateMessage",
      onSuccess: (data, variables) => {
        console.log("onSuccess", data, variables);
      },
    }
  );
  const handleUpdate = (values, { setSubmitting }) => {
    const modifiedValues = preprocessorMessage(values);
    setTimeout(() => {
      mutation.mutate(
        { ...modifiedValues },
        {
          onSuccess: async (_res) => {
            alert("Message uploaded!");
            router.push("/Message");
          },
          onError: async (err, varia) => {
            console.log("onError", err, varia);
          },
        }
      );
      setSubmitting(false);
    }, 400);
    if (mutation.isError) {
      console.log("failed", mutation.error.message);
    }
  };
  if (isQueryLoading || !isQuerySuccess || !fetchedData) {
    return <h2>Loading</h2>;
  }
  if (isError) {
    return <></>;
  }
  if (isQuerySuccess && fetchedData) {
    const { Message_by_Id } = fetchedData;
    return (
      <>
        <Head>
          <title>CT Edit Message</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <MessageForm data={Message_by_Id} handleSubmit={handleUpdate} />
      </>
    );
  }
}

export default MessageEditPage;
