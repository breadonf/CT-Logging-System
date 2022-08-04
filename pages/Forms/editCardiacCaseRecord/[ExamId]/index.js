import { useRouter } from "next/router";
import React from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import preprocessor from "../../../../helpers/preprocessorCardiacCase";
import setData from "../../../../helpers/setData";
import { updateCardiacCTCaseById } from "../../../../queries/mutations";
import { getCardiacCaseRecordByID } from "../../../../queries/queries";
import CardiacForm from "/components/Forms/CardiacForm";

export default function EditRoutineForm() {
  const router = useRouter();
  const { ExamId } = router.query;
  const {
    data: fetchedData,
    isLoading: isQueryLoading,
    isSuccess: isQuerySuccess,
    isError,
  } = useQuery(
    ["CardiacCaseRecordByID", ExamId],
    async () => await getCardiacCaseRecordByID(parseInt(ExamId)),
    {
      retry: true,
      refetchOnMount: "always",
      cacheTime: 1,
    }
  );
  const mutation = useMutation(
    (newFormData) => {
      setData(
        updateCardiacCTCaseById,
        {
          data: newFormData.data,
          updateCtItemId: newFormData.updateCardiacCtRecordItemId,
        },
        true,
        2
      );
    },
    {
      mutationKey: "updateCardiacCtItem",
      onSuccess: (data) => console.log(data),
    }
  );
  const handleUpdate = async (values, { setSubmitting }) => {
    const modifiedValues = preprocessor(values);
    setTimeout(() => {
      mutation.mutate(
        {
          data: modifiedValues,
          updateCardiacCtRecordItemId: parseInt(modifiedValues.id),
        },
        {
          onSuccess: async (_res) => {
            toast.success(
              `Your Cardiac Protocol records for ${modifiedValues.PID} is updated`,
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
            router.push(`/`);
          },
          onError: async (err, varia) => {
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
    const { Cardiac_CT_Record_by_id } = fetchedData;
    return (
      <CardiacForm data={Cardiac_CT_Record_by_id} handleSubmit={handleUpdate} />
    );
  }
}
