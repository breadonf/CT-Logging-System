import React from "react";
import RoutineForm from "../../components/Forms/RoutineForm";
import INITIAL_FORM_STATE from "../../components/Forms/RoutineForm/InitialFormState";
import preprocessor from "../../helpers/preprocessor";
import { createCTrecord } from "../../queries/mutations";
import { useMutation } from "react-query";
import setData from "../../helpers/setData";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Head from "next/head";
import { Typography } from "@mui/material";

function RoutineCases() {
  const router = useRouter();
  const mutation = useMutation(
    async (newFormData) => {
      await setData(createCTrecord, { data: newFormData });
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
            `Success, your Ct records for ${modifiedValues.PID} at ${modifiedValues.Date} is created`
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
  if (mutation.isSuccess) {
  }
  return (
    <>
      <Head>
        <title>CT record</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <RoutineForm data={INITIAL_FORM_STATE} handleSubmit={handleSubmit} />
    </>
  );
}

export default RoutineCases;
