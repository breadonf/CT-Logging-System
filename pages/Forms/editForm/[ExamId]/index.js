import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import RoutineForm from "../../../../components/Forms/RoutineForm";
import { getExamDetailsByID } from "../../../../queries/queries";

export default function EditRoutineForm() {
  const router = useRouter();
  const { ExamId } = router.query;
  const {
    data,
    isLoading: isQueryLoading,
    isSuccess: isQuerySuccess,
    isError,
    error,
  } = useQuery(
    ["ExamDetailsByID", ExamId],
    async () =>
      await getExamDetailsByID(parseInt(ExamId)).then(console.log(data)),
    { retry: true }
  );
  
  if (isQueryLoading || !isQuerySuccess || !data) {
    return <h2>Loading</h2>;
  }
  if (isError) {
    return <></>;
  }
  if (isQuerySuccess && data) {
    const { CT_by_id } = data;
    console.log("From editform", CT_by_id);
    return <RoutineForm data={CT_by_id} />;
  }
}
