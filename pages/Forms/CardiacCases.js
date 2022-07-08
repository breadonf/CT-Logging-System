import React from "react";
import CardiacForm from "../../components/Forms/CardiacForm";
import INITIAL_FORM_STATE from "../../components/Forms/CardiacForm/InitialFormState";
import preprocessor from "../../helpers/preprocessorCardiacForm";
import { createCardiacCTrecord } from "../../queries/mutations";
import { useMutation } from "react-query";
import setData from "../../helpers/setData";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Head from "next/head";

function CardiacCases() {
  const router = useRouter();
  const mutation = useMutation(
    async (newFormData) => {
      await setData(createCardiacCTrecord, { data: newFormData });
    },
    {
      mutationKey: "createCTitem",
      onSuccess: (data, variables, context) => {
        console.log("onSucces", data, variables);
      },
    }
  );
  const handleSubmit = async (values, { setSubmitting }) => {
    const modifiedValues = preprocessor(values);
    await new Promise((r) => setTimeout(r, 750));
    mutation.mutate(
      { ...modifiedValues },
      {
        onSuccess: async (res) => {
          alert(
            `Success, your Cardiac CT protocol for ${modifiedValues.PID} is created`
          );
          router.push("/Table");
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
        <title>CT Cardiac record</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CardiacForm data={INITIAL_FORM_STATE} handleSubmit={handleSubmit} />
    </>
  );
}

export default CardiacCases;
