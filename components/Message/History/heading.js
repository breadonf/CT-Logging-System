import { Button, Grid, Typography } from "@mui/material";

import CreateIcon from "@mui/icons-material/Create";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import Link from "next/link";
import React from "react";

export default function MessageHistoryHeading() {
  return (
    <Grid container sx={{ borderBottom: "2px solid White", py: 2, mb: 2 }}>
      <Grid item xs={8} sx={{ pl: 4 }}>
        <Typography variant="h4" color="White">
          <HistoryEduIcon fontSize="string" sx={{ mr: 2 }} />
          Messages
        </Typography>
      </Grid>
      <Grid item xs={4} sx={{ alignSelf: "center", direction: "rtl", pr: 4 }}>
        <Link href={"/message/form"} passHref>
          <Button variant="contained">
            Leave a Message
            <CreateIcon />
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
