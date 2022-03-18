import React from "react";
import RoutineForm from "../../components/Forms/RoutineForm";
import INITIAL_FORM_STATE from "../../components/Forms/RoutineForm/InitialFormState";
import preprocessor from "../../helpers/preprocessor";
import { createCTrecord } from "../../queries/mutations";
import { useMutation } from "react-query";
import setData from "../../helpers/setData";
function RoutineCases() {
  const mutation = useMutation((newFormData) => {
    setData(createCTrecord, { data: newFormData });
  });
  const handleSubmit = async (
    values,
    { props, setErrors, setSubmitting, setFieldValue }
  ) => {
    const modifiedValues = preprocessor(values);
    setTimeout(() => {
      mutation.mutate({ ...modifiedValues });

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
  };
  return <RoutineForm data={INITIAL_FORM_STATE} handleSubmit={handleSubmit} />;
}

export default RoutineCases;
