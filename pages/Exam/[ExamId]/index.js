import React from "react";
import ExamDetails from "../../../components/ExamDetails";
import { useRouter } from "next/router";
import { useQuery } from "graphql-hooks";

export default function ExamDetailsPage () {
    const router = useRouter();
    const ExamID = router.query.ExamID;
    const { data: ExamDetailsData, isSuccess } = useQuery (
        "ExamDetailsData",
        async () => await getExamDetailsByID()
    );

    return(
        <p>Pending edit....</p>
        // <ExamDetails />
    )
};