import React from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "react-query";
import RoutineForm from "../../../../components/Forms/RoutineForm";
import { getExamDetailsByID } from "../../../../queries/queries";
import { updateCTRecordById } from "../../../../queries/mutations";
import preprocessor from "../../../../helpers/preprocessor";
import setData from "../../../../helpers/setData";
import { toast } from "react-hot-toast";

export default function EditRoutineForm() {
  const router = useRouter();
  const { ExamId } = router.query;
  const {
    data: fetchedData,
    isLoading: isQueryLoading,
    isSuccess: isQuerySuccess,
    isError,
  } = useQuery(
    ["ExamDetailsByID", ExamId],
    async () => await getExamDetailsByID(parseInt(ExamId)),
    {
      retry: true,
      refetchOnMount: "always",
      cacheTime: 1,
    }
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
    { mutationKey: "updateCTitem", onSuccess: (data) => console.log(data) }
  );
  const handleUpdate = async (values, { setSubmitting }) => {
    const modifiedValues = preprocessor(values);
    setTimeout(() => {
      mutation.mutate(
        { data: modifiedValues, updateCtItemId: values.count },
        {
          onSuccess: async (_res) => {
            toast.success(
              `Success, your CT records for ${modifiedValues.PID} is updated`,
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
            router.push("/Table");
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
