import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import parse from 'html-react-parser';

import mockData from "../LogbookForm/mockData";

const MessageBox = (props) => {
  return (
    <Grid item xs={12}>
      <Link href={"/Logbook"}>
        <Card raised>
          <CardActionArea>
            <CardContent>
              <Grid container spacing={2}>
                <Grid
                  item
                  component="div"
                  xs={2}
                  sx={{
                    borderRight: 1,
                    mt: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "Bold" }} noWrap>
                    {mockData.category}
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <Grid container>
                    <Grid item xs={3}>
                      <Typography>Created at: 12/7/2022</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>Effective from: 12/7/2022</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography align="right">Message from: Man</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography align="right">
                        Originated by: Carol
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                      {parse(mockData.htmlMessage)}
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                      <Typography>Follow Up Comments:</Typography>
                      <Typography>Good </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default MessageBox;
