import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";
import INITIAL_FORM_STATE from "../../components/Forms/RoutineForm/InitialFormState";
import React from "react";
import RoutineForm from "../../components/Forms/RoutineForm";
import { createCTrecord } from "../../queries/mutations";
import preprocessor from "../../helpers/preprocessor";
import setData from "../../helpers/setData";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { useRouter } from "next/router";

function RoutineCases() {
  const router = useRouter();
  const mutation = useMutation(
    async (newFormData) => {
      await setData(createCTrecord, { data: newFormData });
    },
    {
      mutationKey: "createCTitem",
      onSuccess: (data, variables) => {
        console.log("onSuccess", data, variables);
      },
    }
  );
  const handleSubmit = async (values) => {
    const modifiedValues = preprocessor(values);
    await new Promise((r) => setTimeout(r, 500));

    mutation.mutate(
      { ...modifiedValues },
      {
        onSuccess: async (_res) => {
          toast.success(
            `Your CT records for ${modifiedValues.PID} at ${modifiedValues.Date} is created`,
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
          router.push("/general/table");
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
