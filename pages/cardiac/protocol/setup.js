import Box from "@mui/material/Box";
import CardiacProtocolForm from "~/components/Forms/CardiacProtocolForm";
import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";
import INITIAL_FORM_STATE from "~/components/Forms/CardiacProtocolForm/InitialFormState";
import React from "react";
import { createCardiacCTSetupRecord } from "~/queries/mutations";
import preprocessor from "~/helpers/preprocessorCardiacForm";
import setData from "/helpers/setData";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { useRouter } from "next/router";

function CardiacCases() {
  const router = useRouter();
  const mutation = useMutation(
    async (newFormData) => {
      await setData(createCardiacCTSetupRecord, { data: newFormData });
    },
    {
      mutationKey: "createCardiacCTSetupRecord",
      onSuccess: (data, variables) => {
        console.log("onSuccess", data, variables);
      },
    }
  );
  const handleSubmit = async (values) => {
    const modifiedValues = preprocessor(values);
    await new Promise((r) => setTimeout(r, 750));
    mutation.mutate(
      { ...modifiedValues },
      {
        onSuccess: async (_res) => {
          toast.success(
            `Your Cardiac Protocol records for ${modifiedValues.PID} is created`,
            {
              style: {
                border: "1px solid #713200",
                padding: "40px",
                color: "#713200",
                fontSize: "1.5rem",
                minWidth: "20%",
              },
            }
          );
          router.push(`/cardiac/table`);
        },
        onError: async (err, varia) => {
          console.log("onError", varia);
        },
      }
    );
    if (mutation.isError) {
      console.log(
        "Fail,🚀 ~ file: index.js ~ line 74 ~ RoutineForm ~ mutation",
        mutation.error
      );
    }
    if (mutation.onSettled) {
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>;
    }
  };
  return (
    <>
      <Head>
        <title>CT Cardiac Setup</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CardiacProtocolForm
        data={INITIAL_FORM_STATE}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default CardiacCases;
