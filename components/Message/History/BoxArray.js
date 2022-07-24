import React from "react";
import { Grid } from "@mui/material";
import MessageCard from "./MessageCard";

function BoxArray({ data }) {
  return (
    <>
      {Object.values(data).map((value, index) => {
        return (
          <div key={index}>
            {value.active ? (
              <Grid item xs={12} sx={{ pb: 1 }}>
                <MessageCard messageDetail={value} />
              </Grid>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </>
  );
}

export default BoxArray;
