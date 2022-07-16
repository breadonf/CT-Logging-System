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

const MessageCard = ({ messageDetail }) => {
  return (
    <>
      {messageDetail.active ? (
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
                      <Typography>{messageDetail.category}</Typography>
                      {messageDetail.important ? (
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
                          <Typography>
                            Created at: {messageDetail.inputDate}
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography>
                            Effective from: {messageDetail.effectiveDate}
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography align="right">
                            Message from: {messageDetail.inputUser}
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography align="right">
                            Originated by: {messageDetail.originatedBy}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Divider />
                          {parse(messageDetail.htmlMessage)}
                        </Grid>
                        <Grid item xs={12}>
                          <Divider />
                          <Typography>
                            Follow Up Comments: {messageDetail.comments}
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
      ) : (
        <></>
      )}
    </>
  );
};

export default MessageCard;
