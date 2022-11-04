import { Container, Grid, Paper } from "@mui/material";
import { getCardiacSetup, getCardiacSetupNumber } from "~/queries/queries";

import Head from "next/head";
import Link from "next/link";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import PageviewIcon from "@mui/icons-material/Pageview";
import { RecordTableHeaders } from "~/components/Table/CardiacRecordTableHeader";
import SearchIcon from "@mui/icons-material/Search";
import TableMaterial from "~/components/Table/TableMaterial";
import { useQuery } from "react-query";
import { useState } from "react";

//import { getHomepageCT, getHomepageCTNumber } from "../../queries/queries";

function RowActionsItems({ row }) {
  const { id } = row.original;
  const { PID } = row.original;
  return (
    <>
      <Link key="1" passHref href={`/cardiac/protocol/${id}`}>
        <PageviewIcon />
      </Link>
      <Link key="2" passHref href={`/forms/editCardiacSetup/${id}`}>
        <ModeEditIcon />
      </Link>
      <Link key="3" passHref href={`/cardiac/table/${PID}`}>
        <SearchIcon />
      </Link>
    </>
  );
}

export default function CardiacSetupTable() {
  const [pageNumber, setPageNumber] = useState(1);
  const [sorting, setSorting] = useState([]);

  const {
    data: records,
    isLoading,
    isSuccess,
    isFetching,
    isPreviousData,
    isError,
  } = useQuery(
    ["CardiacSetupRecord", pageNumber],
    async () => await getCardiacSetup(pageNumber),
    {
      keepPreviousData: true,
    }
  );
  const { data: rowCount } = useQuery(
    "rowNumbers",
    async () => await getCardiacSetupNumber(),
    {
      staleTime: 60 * 1000,
    }
  );
  return (
    <Grid sx={{ py: 3 }} container>
      <Head>
        <title>Cardiac Case Table</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Grid item xs={12}>
        <Container sx={{ maxWidth: "80%" }} maxWidth={false}>
          <Paper
            elevation={12}
            sx={{
              p: 3,
              height: "85vh",
              bgcolor: "#F0F3BD",
              overflowY: "auto",
            }}
          >
            {isSuccess && (
              <TableMaterial
                setPageNumber={setPageNumber}
                records={records}
                isSuccess={isSuccess}
                rowCount={rowCount}
                isLoading={isLoading}
                pageNumber={pageNumber}
                isPreviousData={isPreviousData}
                columnHeaders={RecordTableHeaders}
                paginationMode="server"
              />
            )}
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}
