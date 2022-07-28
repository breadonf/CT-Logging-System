import React from "react";
import Head from "next/head";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { getExamDetailsByID } from "../../../queries/queries";
import {
  Paper,
  Grid,
  Box,
  Container,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import SickIcon from "@mui/icons-material/Sick";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CancelIcon from "@mui/icons-material/Cancel";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Chip from "@mui/material/Chip";
import Link from "next/link";
import DetailPage from "../../../components/DetailPage";

export default function ExamDetailsPage() {
  const router = useRouter();
  const { ExamId } = router.query;
  const {
    data,
    isLoading: isQueryLoading,
    isSuccess: isQuerySuccess,
    isError,
  } = useQuery(
    ["ExamDetailsByID", ExamId],
    async () => await getExamDetailsByID(parseInt(ExamId)),
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
    return (
      <>
        <Head>
          <title>{`Records of ${CT_by_id.PID} at ${CT_by_id.Date_func.year}-${CT_by_id.Date_func.month}-${CT_by_id.Date_func.day}`}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <DetailPage data={CT_by_id} />
      </>
    );
  }
}

// export const getServerSideProps = async (context) => {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(
//     ["ExamDetailsByID", parseInt(context.params.ExamId)],
//     getExamDetailsByID(parseInt(context.params.ExamId))
//   );
//   //   const res = await fetch(
//   //     `http://localhost:8055/graphql/?query=query {CT_by_id(id:${context.params.ExamId}) {count}}`
//   //   );
//   //   const examData = await res.json();
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };
