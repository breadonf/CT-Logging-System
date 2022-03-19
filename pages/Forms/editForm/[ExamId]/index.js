import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "react-query";
import RoutineForm from "../../../../components/Forms/RoutineForm";
import { getExamDetailsByID } from "../../../../queries/queries";
import { updateCTRecordById } from "../../../../queries/mutations";
import preprocessor from "../../../../helpers/preprocessor";
import setData from "../../../../helpers/setData";

export default function EditRoutineForm() {
  const router = useRouter();
  const { ExamId } = router.query;
  const {
    data: fetchedData,
    isLoading: isQueryLoading,
    isSuccess: isQuerySuccess,
    isError,
    error,
  } = useQuery(
    ["ExamDetailsByID", ExamId],
    async () => await getExamDetailsByID(parseInt(ExamId)),
    { retry: true }
  );
  const mutation = useMutation(
    (newFormData) => {
      setData(
        updateCTRecordById,
        {
          data: newFormData.data,
          updateCtItemId: newFormData.updateCtItemId,
        },
        true
      );
    },
    { mutationKey: "updateCTitem" }
  );
  const handleUpdate = async (values, { setSubmitting }) => {
    const modifiedValues = preprocessor(values);
    setTimeout(() => {
      mutation.mutate(
        { data: modifiedValues, updateCtItemId: values.count },
        {
          onSuccess: async (res) => {
            alert(
              `Success, your Ct records for ${modifiedValues.PID} is updated ${res?.count}`
            );
          },
          onError: async (err, varia) => {
            console.log("onError", err, varia);
            console.log(varia.data);
          },
        }
      );
      setSubmitting(false);
    }, 400);
    if (mutation.isError) {
      console.log("Error", mutation.error.message);
    }
  };
  if (isQueryLoading || !isQuerySuccess || !fetchedData) {
    return <h2>Loading</h2>;
  }
  if (isError) {
    return <></>;
  }
  if (isQuerySuccess && fetchedData) {
    const { CT_by_id } = fetchedData;
    return <RoutineForm data={CT_by_id} handleSubmit={handleUpdate} />;
  }
}
