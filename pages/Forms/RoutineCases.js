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
function RoutineCases() {
  const router = useRouter();
  const mutation = useMutation(
    async (newFormData) => {
      await setData(createCTrecord, { data: newFormData });
    },
    { mutationKey: "createCTitem" }
  );
  const handleSubmit = async (values, { setSubmitting }) => {
    const modifiedValues = preprocessor(values);
    console.log("modifiedValues", modifiedValues);
    setTimeout(() => {
      mutation.mutate(
        { ...modifiedValues },
        {
          onSuccess: async (res, variables) => {
            alert(
              `Success, your Ct records for ${modifiedValues.PID} is saved`
            );
            router.push("/Table");
          },
          onError: async (err, varia) => {
            console.log("onError", err, varia);
            console.log(varia.data);

            alert(`Error, Please find PACS administrator ${err}`);
          },
        }
      );

      setSubmitting(false);
    }, 800);
    if (mutation.isError) {
      console.log(
        "🚀 ~ file: index.js ~ line 74 ~ RoutineForm ~ mutation",
        mutation.error.message
      );
    }
    console.log(
      "🚀 ~ file: index.js ~ line 71 ~ setTimeout ~ mutation",
      mutation
    );
    if (mutation.onSettled) {
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>;
    }
  };
  if (mutation.isSuccess) {
    console.log("Success", mutation);
  }
  return <RoutineForm data={INITIAL_FORM_STATE} handleSubmit={handleSubmit} />;
}

export default RoutineCases;
