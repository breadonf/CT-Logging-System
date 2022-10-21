import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { toast } from "react-hot-toast";
import { EditorState, convertFromRaw } from "draft-js";

import { useMutation, useQuery } from "react-query";
import { getMessageByID } from "/queries/queries";

import preprocessorMessage from "/components/Message/MessageForm/preprocessorMessage";
import setData from "/helpers/setData";
import { updateMessageById } from "../../../queries/mutations";
import MessageForm from "/components/Message/MessageForm";
function MessageEditPage() {
  const router = useRouter();
  const { MessageId } = router.query;
  const {
    data: fetchedData,
    isLoading: isQueryLoading,
    isSuccess: isQuerySuccess,
    isError,
  } = useQuery(
    ["MessageByID", MessageId],
    async () => await getMessageByID(parseInt(MessageId)),
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
          updateCtItemId: newFormData.updateMessageItemId,
        },
        true,
        3
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
        {
          data: modifiedValues,
          updateMessageItemId: parseInt(modifiedValues.id),
        },
        {
          onSuccess: async (_res) => {
            toast.success("Success, message updated", {
              style: {
                border: "1px solid #713200",
                padding: "40px",
                color: "#713200",
                fontSize: "1.5rem",
                minWidth: "20%",
              },
            });
            router.replace("/message");
          },
          onError: async (err, varia) => {
            toast.error(`Input failed. Error: ${varia}`, {
              style: {
                border: "1px solid #713200",
                padding: "40px",
                color: "#713200",
                fontSize: "1.5rem",
                minWidth: "20%",
              },
            });
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
    const { message_by_id } = fetchedData;
    let { messageEditorState } = message_by_id;
    const updatedContentState = messageEditorState;
    if (typeof updatedContentState !== "object") {
      const JSONContentState = JSON.parse(updatedContentState);
      const contentState = convertFromRaw(JSONContentState);
      const editorState = EditorState.createWithContent(contentState);
      message_by_id.messageEditorState = editorState;
    }
    console.log("form", message_by_id);
    return (
      <>
        <Head>
          <title>CT Edit Message</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <MessageForm
          title="Edit Message"
          data={message_by_id}
          handleSubmit={handleUpdate}
        />
      </>
    );
  }
}

export default MessageEditPage;
