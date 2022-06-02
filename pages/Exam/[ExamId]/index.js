import React from "react";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";
import { getExamDetailsByID } from "../../../queries/queries";
import { useState, useEffect } from "react";
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
export default function ExamDetailsPage() {
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
      <Grid spacing={2} sx={{ py: 5 }} container>
        <Head>
          <title>{`Records of ${CT_by_id.PID} at ${CT_by_id.Date_func.year}-${CT_by_id.Date_func.month}-${CT_by_id.Date_func.day}`}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Grid item xs={12}>
          <Container sx={{ maxWidth: "80%" }} maxWidth={false}>
            <Paper
              elevation={8}
              sx={{ px: 3, py: 5, bgcolor: "#FFF1B2", minHeight: "90" }}
            >
              {/* Heading */}
              <Box sx={{ backgroundColor: "#333333" }}>
                <Grid container spacing={2} sx={{ px: 2, py: 2 }}>
                  <Grid item xs={6}>
                    <Typography variant="h5" color="#FFFFFF" align="left">
                      {CT_by_id.PID} | {CT_by_id.protocol}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h5" color="#FFFFFF" align="right">
                      {CT_by_id.Date_func.year}-{CT_by_id.Date_func.month}-
                      {CT_by_id.Date_func.day}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              {/* Patient Details */}
              <Grid container spacing={1} component={"div"} sx={{ py: 5 }}>
                <Grid item xs={2} sx={{ pr: 2 }}>
                  <Typography variant="h5" color="#265B67">
                    <SickIcon sx={{ mr: 1 }} />
                    Patient
                  </Typography>
                </Grid>
                <Grid
                  container
                  xs={10}
                  spacing={1}
                  sx={{
                    border: 1,
                    borderRadius: 1,
                    backgroundColor: "#EEEEEE",
                    py: 1,
                  }}
                >
                  <Grid item xs={4}>
                    <Typography variant="h6" color="#333333">
                      ID: {CT_by_id.PID}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6" color="#333333">
                      Age: {CT_by_id.age} y
                    </Typography>
                  </Grid>

                  <Grid item xs={4}>
                    <Typography variant="h6" color="#333333">
                      In patient?:
                      {CT_by_id.inPatient ? (
                        <CheckRoundedIcon sx={{ ml: 1 }} />
                      ) : (
                        <CancelIcon sx={{ ml: 1 }} />
                      )}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6" color="#333333">
                      Height: {CT_by_id.height} cm
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6" color="#333333">
                      Weight: {CT_by_id.weight} kg
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6" color="#333333">
                      Circumference: {CT_by_id.circumference} cm
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Divider />

              {/* Exam Details */}
              <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
                <Grid item xs={2} sx={{ pr: 2 }}>
                  <Typography variant="h5" color="#265B67">
                    <ImageSearchIcon sx={{ mr: 1 }} />
                    Exam
                  </Typography>
                </Grid>
                <Grid
                  container
                  xs={10}
                  spacing={1}
                  sx={{
                    border: 1,
                    borderRadius: 1,
                    backgroundColor: "#EEEEEE",
                    py: 1,
                  }}
                >
                  <Grid item xs={4}>
                    <Typography variant="h6" color="#333333">
                      Date: {CT_by_id.Date_func.year}-{CT_by_id.Date_func.month}
                      -{CT_by_id.Date_func.day}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6" color="#333333">
                      Urgent?:
                      {CT_by_id.urgent ? (
                        <CheckRoundedIcon sx={{ ml: 1 }} />
                      ) : (
                        <CancelIcon sx={{ ml: 1 }} />
                      )}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6" color="#333333">
                      Sedation?:
                      {CT_by_id.sedation ? (
                        <CheckRoundedIcon sx={{ ml: 1 }} />
                      ) : (
                        <CancelIcon sx={{ ml: 1 }} />
                      )}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" color="#333333">
                      Protocol:
                      {CT_by_id.protocol.map((protocol) => (
                        <Chip
                          key={protocol}
                          variant="outlined"
                          color="error"
                          label={protocol}
                          sx={{ ml: 2 }}
                        />
                      ))}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6" color="#333333">
                      kV (Tube A):{CT_by_id.kV_a}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    {CT_by_id.kV_b && (
                      <Typography variant="h6" color="#333333">
                        kV (Tube B):{CT_by_id.kV_b}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6" color="#333333">
                      Pitch:{CT_by_id.pitch}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Divider />

              {/* Contrast Details */}
              {CT_by_id.volume ? (
                <>
                  <Grid container spacing={2} component={"div"} sx={{ py: 4 }}>
                    <Grid item xs={2} sx={{ pr: 2 }}>
                      <Typography variant="h5" color="#265B67">
                        <ShutterSpeedIcon sx={{ mr: 1 }} />
                        Contrast Details
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      xs={10}
                      spacing={1}
                      sx={{
                        border: 1,
                        borderRadius: 1,
                        backgroundColor: "#EEEEEE",
                        py: 1,
                      }}
                    >
                      <Grid item xs={6}>
                        <Typography variant="h6" color="#333333">
                          {" "}
                          Injection Site: {CT_by_id.injectionSite}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" color="#333333">
                          Hand Injection:
                          {CT_by_id.handInjection ? (
                            <CheckRoundedIcon sx={{ ml: 1 }} />
                          ) : (
                            <CancelIcon sx={{ ml: 1 }} />
                          )}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" color="#333333">
                          Mixed Contrast:
                          {CT_by_id.mixedContrast ? (
                            <CheckRoundedIcon sx={{ ml: 1 }} />
                          ) : (
                            <CancelIcon sx={{ ml: 1 }} />
                          )}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="h6" color="#333333">
                          Contrast Agent: {CT_by_id.contrastType}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="h6" color="#333333">
                          Rate: {CT_by_id.rate} ml/s
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="h6" color="#333333">
                          Volume: {CT_by_id.volume} ml
                        </Typography>
                      </Grid>

                      <Grid item xs={4}>
                        <Typography variant="h6" color="#333333">
                          Direct Post Con?:
                          {CT_by_id.directPostContrast ? (
                            <CheckRoundedIcon sx={{ ml: 1 }} />
                          ) : (
                            <CancelIcon sx={{ ml: 1 }} />
                          )}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="h6" color="#333333">
                          Time to peak: {CT_by_id.ttp} s
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="h6" color="#333333">
                          Delays:{CT_by_id.delays} s
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider />
                </>
              ) : (
                <></>
              )}
              {/* Staff Details */}
              <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
                <Grid item xs={2}>
                  <Typography variant="h5" color="#265B67">
                    <AirlineSeatReclineExtraIcon sx={{ mr: 1 }} />
                    Staff
                  </Typography>
                </Grid>
                <Grid
                  container
                  xs={10}
                  spacing={1}
                  sx={{
                    border: 1,
                    borderRadius: 1,
                    backgroundColor: "#EEEEEE",
                    py: 1,
                  }}
                >
                  <Grid item xs={12}>
                    <Typography variant="p" color="#333333">
                      Radiographer(s): {CT_by_id.radiographer}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="p" color="#333333">
                      Radiologist(s):
                      {CT_by_id.radiologists.map((radiologist) => (
                        <Chip
                          key={radiologist}
                          variant="outlined"
                          color="primary"
                          label={radiologist}
                          sx={{ ml: 1 }}
                        />
                      ))}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="p" color="#333333">
                      Performing Nurse(s): {CT_by_id.nurses}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Divider />
              {/* Remarks */}
              <Grid container spacing={2} component={"div"} sx={{ py: 3 }}>
                <Grid container sx={{ py: 2, px: 2 }}>
                  <Grid item xs={2} sx={{ pb: 2 }}>
                    <Typography variant="h6" color="#265B67">
                      <BorderColorIcon sx={{ mr: 1 }} />
                      Keywords
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={10}
                    sx={{ border: 1, borderRadius: 2, bgcolor: "#FFFFFF" }}
                  >
                    {CT_by_id.keywords}
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ pb: 2 }}>
                  <Typography variant="h6" color="#265B67">
                    <BorderColorIcon sx={{ mr: 1 }} />
                    Remarks
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    py: 3,
                    mx: 2,
                    border: 1,
                    borderRadius: 2,
                    bgcolor: "#FFFFFF",
                  }}
                >
                  {CT_by_id.remark}
                </Grid>
              </Grid>

              {/* Buttons */}
              <Grid
                container
                spacing={1}
                component={"div"}
                sx={{ pt: 4, justifyContent: "center" }}
              >
                <Grid item xs={6}>
                  <Link passHref href={`/Table`}>
                    <Button variant="contained" fullWidth>
                      Back to Table
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </Grid>
      </Grid>
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
