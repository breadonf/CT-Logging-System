import React from "react";
import Head from "next/head";
import { useQuery } from "react-query";
import { getHomepageCT, getHomepageProtocol } from "../queries/queries";
import TableMaterial from "../components/Table/TableMaterial";
import { useState } from "react";
import { Paper, Grid } from "@mui/material";
export default function Table() {
  const [selectedProtocols, setSelectedProtocols] = useState([]);
  const { data: records, isSuccess } = useQuery(
    "record",
    async () => await getHomepageCT()
  );
  const getSelectedProtocols = (protocol) => {
    setSelectedProtocols(protocol);
    console.log(selectedProtocols);
  };
  return (
    <Grid container>
      <Head>
        <title>CT record</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Grid item xs={12}>
        <Paper
          elevation={12}
          sx={{ minHeight: "90vh", px: 3, py: 5, bgcolor: "#F0F3BD" }}
        >
          <TableMaterial records={records} isSuccess={isSuccess} />
        </Paper>
      </Grid>
    </Grid>
  );
}
