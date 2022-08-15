import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import TagIcon from "@mui/icons-material/Tag";
import { Grid, Typography } from "@mui/material";
import Textfield from "../../FormsUI/Textfield";
function Remarks() {
  return (
    <Grid container spacing={2} component={"div"} sx={{ pb: 5 }}>
      <Grid item>
        <Typography variant="h5" color="#05668D">
          <TagIcon sx={{ mr: 1 }} />
          Keyword(s)
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Textfield
          rows={4}
          name="keywords"
          label="Keyword(s) for your retrieval purpose"
        />
      </Grid>
      <Grid item>
        <Typography variant="h5" color="#05668D">
          <BorderColorIcon sx={{ mr: 1 }} />
          Remarks
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Textfield
          multiline
          rows={4}
          name="remark"
          label="Any additional detail you would like to make"
        />
      </Grid>
    </Grid>
  );
}

export default Remarks;
