import React from "react";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";
import { getExamDetailsByID } from "../../../queries/queries";
import { useState, useEffect } from "react";
import {
  Paper,
  Grid,
  Container,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import SickIcon from "@mui/icons-material/Sick";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
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
              elevation={12}
              sx={{ px: 3, py: 5, bgcolor: "#F0F3BD", minHeight: "90" }}
            >
              <Grid item xs={12}>
                <Typography variant="h3" align="center" color="#093A3E">
                  Record
                </Typography>
              </Grid>
              {/* Patient Details */}
              <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
                <Grid item xs={12}>
                  <Typography variant="h5" color="#05668D">
                    <SickIcon sx={{ mr: 1 }} /> Patient Details
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h5" color="#05668D">
                    Patient ID: {CT_by_id.PID}
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="h5" color="#05668D">
                    Age: {CT_by_id.age}
                  </Typography>
                </Grid>

                <Grid item xs={3}>
                  <Typography variant="h5" color="#05668D">
                    In patient? :
                    {CT_by_id.inPatient ? <CheckRoundedIcon /> : <></>}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h5" color="#05668D">
                    Height: {CT_by_id.height} cm
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h5" color="#05668D">
                    Weight: {CT_by_id.weight}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h5" color="#05668D">
                    Circumference: {CT_by_id.circumference}
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
              {/* Exam Details */}
              <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
                <Grid item xs={12}>
                  <Typography variant="h5" color="#05668D">
                    <ImageSearchIcon sx={{ mr: 1 }} />
                    Exam Details
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" color="#05668D">
                    Exam Date: {CT_by_id.Date_func.year}-
                    {CT_by_id.Date_func.month}-{CT_by_id.Date_func.day}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h5" color="#05668D">
                    Urgent?:{CT_by_id.urgent ? <CheckRoundedIcon /> : <></>}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h5" color="#05668D">
                    Sedation?:{CT_by_id.sedation ? <CheckRoundedIcon /> : <></>}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" color="#05668D">
                    Protocol:
                    {CT_by_id.protocol.map((protocol) => (
                      <Chip variant="outlined" color="error" label={protocol} />
                    ))}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h5" color="#05668D">
                    kV (Tube A):{CT_by_id.kV_a}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  {CT_by_id.kV_b && (
                    <Typography variant="h5" color="#05668D">
                      kV (Tube B):{CT_by_id.kV_b}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h5" color="#05668D">
                    Pitch:{CT_by_id.pitch}
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
              {/* Contrast Details */}
              {CT_by_id.volume ? (
                <>
                  <Grid container spacing={2} component={"div"} sx={{ py: 4 }}>
                    <Grid item xs={12}>
                      <Typography variant="h5" color="#05668D">
                        <ShutterSpeedIcon sx={{ mr: 1 }} />
                        Contrast Details
                      </Typography>
                    </Grid>
                    <>
                      <Grid item xs={6}>
                        <Typography variant="h5" color="#05668D">
                          {" "}
                          Injection Site: {CT_by_id.injectionSite}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h5" color="#05668D">
                          Hand Injection:
                          {CT_by_id.handInjection ? (
                            <CheckRoundedIcon />
                          ) : (
                            <></>
                          )}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h5" color="#05668D">
                          Mixed Contrast Scheme?:
                          {CT_by_id.mixedContrast ? (
                            <CheckRoundedIcon />
                          ) : (
                            <></>
                          )}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="h5" color="#05668D">
                          Type of Contrast:{CT_by_id.contrastType}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="h5" color="#05668D">
                          Rate:{CT_by_id.rate}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="h5" color="#05668D">
                          Contrast Volume:{CT_by_id.volume}
                        </Typography>
                      </Grid>

                      <Grid item xs={4}>
                        <Typography variant="h5" color="#05668D">
                          Direct Post Contrast?:
                          {CT_by_id.directPostContrast ? (
                            <CheckRoundedIcon />
                          ) : (
                            <></>
                          )}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="h5" color="#05668D">
                          Time to peak: {CT_by_id.ttp}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="h5" color="#05668D">
                          Delays:{CT_by_id.delays}
                        </Typography>
                      </Grid>
                    </>
                  </Grid>
                  <Divider />
                </>
              ) : (
                <></>
              )}
              {/* Staff Details */}
              <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
                <Grid item xs={12}>
                  <Typography variant="h5" color="#05668D">
                    <AirlineSeatReclineExtraIcon sx={{ mr: 1 }} />
                    Staff Details
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h5" color="#05668D">
                    Performing Radiographer(s): {CT_by_id.radiographer}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h5" color="#05668D">
                    Reporting Radiologist(s):
                    {CT_by_id.radiologists.map((radiologist) => (
                      <Chip
                        variant="outlined"
                        color="primary"
                        label={radiologist}
                      />
                    ))}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h5" color="#05668D">
                    Performing Nurse(s): {CT_by_id.nurses}
                  </Typography>
                </Grid>
              </Grid>

              {/* Remarks */}
              <Grid container spacing={2} component={"div"} sx={{ py: 5 }}>
                <Grid item>
                  <Typography variant="h5" color="#05668D">
                    <BorderColorIcon sx={{ mr: 1 }} />
                    Keywords
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {CT_by_id.keywords}
                </Grid>
                <Grid item>
                  <Typography variant="h5" color="#05668D">
                    <BorderColorIcon sx={{ mr: 1 }} />
                    Remarks
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {CT_by_id.remark}
                </Grid>
              </Grid>
              {/* Buttons */}
              <Grid
                container
                spacing={2}
                component={"div"}
                sx={{ py: 4, justifyContent: "center" }}
              >
                <Grid item xs={2}>
                  <Link href={`/Table`}>
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
