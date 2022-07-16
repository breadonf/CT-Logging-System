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
import FmdBadIcon from "@mui/icons-material/FmdBad";
import parse from "html-react-parser";

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
                  xs={2}
                  sx={{
                    borderRight: 1,
                    mt: 2,
                  }}
                >
                  <Typography>{mockData.category}</Typography>
                  {mockData.important ? (
                    <Typography variant="h1" align="center" color="#8b0000">
                      <FmdBadIcon fontSize="string" />
                    </Typography>
                  ) : (
                    <></>
                  )}
                </Grid>
                <Grid item xs={10}>
                  <Grid container>
                    <Grid item xs={3}>
                      <Typography>Created at: {mockData.inputDate}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>
                        Effective from: {mockData.effectiveDate}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography align="right">
                        Message from: {mockData.inputUser}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography align="right">
                        Originated by: {mockData.originatedBy}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                      {parse(mockData.htmlMessage)}
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                      <Typography>
                        Follow Up Comments: {mockData.comments}
                      </Typography>
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
