import { useMutation, useQuery } from "react-query";

import CardiacProtocolForm from "~/components/Forms/CardiacProtocolForm";
import React from "react";
import { getCardiacSetupByID } from "../../../../queries/queries";
import preprocessor from "../../../../helpers/preprocessorCardiacForm";
import setData from "../../../../helpers/setData";
import toast from "react-hot-toast";
import { updateCardiacCTSetupById } from "../../../../queries/mutations";
import { useRouter } from "next/router";

const toastStyle = {
  border: "1px solid #713200",
  padding: "40px",
  color: "#713200",
  fontSize: "1.5rem",
  minWidth: "20%",
};
export default function EditCardiacForm() {
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
                style: toastStyle,
              }
            );
            router.push(`/cardiac/table`);
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
    return (
      <CardiacProtocolForm data={cardiacCT_by_id} handleSubmit={handleUpdate} />
    );
  }
}
