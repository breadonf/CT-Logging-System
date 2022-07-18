import React from "react";
import Head from "next/head";
import MessageForm from "../../../components/Message/MessageForm";
import preprocessorMessage from "../../../components/Message/MessageForm/preprocessorMessage";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import setData from "../../../helpers/setData";
import { createMessage } from "../../../queries/mutations";
import Box from "@mui/material";
import { CircularProgress } from "@mui/material";

function MessageFormPage() {
  const router = useRouter;
  const mutation = useMutation(
    async (newFormData) => {
      await setData(createMessage, {data: newFormData});
    },
    {mutationKey: "createMessage",
    onSuccess: (data, variables, context) => {
      console.log("onSuccess", data, variables);
    }
  }
  );
  const handleSubmit = (values, { setSubmitting }) => {
      const modifiedValues = preprocessorMessage(values);
      await new Promise((r) => setTimeout(r, 500));

      mutation.mutate(
        {...modifiedValues},
        {
          onSuccess: async (res) => {
            router.push("/Message");
          },
          onError: async (err, variables) => {
            console.log("onError", err, variables)
          }
        }
      );

      if (mutation.isError) {
        console.log(
          "failed",
          mutation.error
        );
      }
      if (mutation.onSettled) {
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>;
      }
  };
  if (mutation.isSuccess) {
  };

  return (
    <>
      <Head>
        <title>CT Add Log</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <MessageForm handleSubmit={handleSubmit} />
    </>
  );
}

export default MessageFormPage;
