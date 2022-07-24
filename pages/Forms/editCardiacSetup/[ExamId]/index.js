import React from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "react-query";
import { getCardiacSetupByID } from "../../../../queries/queries";
import { updateCardiacCTSetupById } from "../../../../queries/mutations";
import preprocessor from "../../../../helpers/preprocessorCardiacForm";
import setData from "../../../../helpers/setData";
import CardiacForm from "../../../../components/Forms/CardiacForm";
import toast from "react-hot-toast";

export default function EditRoutineForm() {
  const router = useRouter();
  const { ExamId } = router.query;
  const {
    data: fetchedData,
    isLoading: isQueryLoading,
    isSuccess: isQuerySuccess,
    isError,
  } = useQuery(
    ["CardiacSetupByID", ExamId],
    async () => await getCardiacSetupByID(parseInt(ExamId)),
    {
      retry: true,
      refetchOnMount: "always",
      cacheTime: 1,
    }
  );
  const mutation = useMutation(
    (newFormData) => {
      setData(
        updateCardiacCTSetupById,
        {
          data: newFormData.data,
          updateCtItemId: newFormData.updateCardiacCtItemId,
        },
        true,
        1
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
        { data: modifiedValues, updateCardiacCtItemId: modifiedValues.id },
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
            router.push(`/cardiac/table/${modifiedValues.PID}`);
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
    const { cardiacCT_by_id } = fetchedData;
    return <CardiacForm data={cardiacCT_by_id} handleSubmit={handleUpdate} />;
  }
}
