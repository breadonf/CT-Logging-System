import React from "react";
import RoutineForm from "../../components/Forms/RoutineForm";
import INITIAL_FORM_STATE from "../../components/Forms/RoutineForm/InitialFormState";
import preprocessor from "../../helpers/preprocessor";
import { createCTrecord } from "../../queries/mutations";
import { useMutation } from "react-query";
import setData from "../../helpers/setData";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
function RoutineCases() {
  const mutation = useMutation(
    (newFormData) => {
      setData(createCTrecord, { data: newFormData });
    },
    { mutationKey: "createCTitem" }
  );
  const handleSubmit = async (values, { setSubmitting }) => {
    const modifiedValues = preprocessor(values);
    setTimeout(async () => {
      await mutation.mutate(
        { ...modifiedValues },
        {
          onSuccess: async (res, variables) => {
            console.log("onSuccess", res);
            console.log("onSuccess", variables);

            alert(
              `Success, your Ct records for ${modifiedValues.PID} is saved ${res?.count}`
            );
          },
        }
      );

      setSubmitting(false);
    }, 400);
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
  return <RoutineForm data={INITIAL_FORM_STATE} handleSubmit={handleSubmit} />;
}

export default RoutineCases;
