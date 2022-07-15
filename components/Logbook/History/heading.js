import React from "react";
import Link from "next/link";
import { Grid, Divider, Typography, Button } from "@mui/material";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import CreateIcon from "@mui/icons-material/Create";

export default function LogHistoryHeading() {
  return (
    <Grid container sx={{ borderBottom: '2px solid White', py: 2, mb: 2 }}>
      <Grid item xs={10} sx={{ pl: 4 }}>
        <Typography variant="h4" color="White">
          <HistoryEduIcon fontSize="string" sx={{ mr: 2 }} />
          Logbook
        </Typography>
      </Grid>
      <Grid item xs={2} sx={{ alignSelf: "center" }}>
        <Link href={"/Logbook/Form"}>
          <Button variant="contained">
            Write A Log
            <CreateIcon />
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
