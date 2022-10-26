import { Grid, Tooltip } from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import PageviewIcon from "@mui/icons-material/Pageview";

//import { getHomepageCT, getHomepageCTNumber } from "../../queries/queries";
export function RowActionsItems({ row, view = "/exam/" }) {
  const { count } = row.original;
  return (
    <Grid container justifyContent="center" alignItem="center" spacing={1}>
      <Grid item alignSelf="center">
        <Link key="1" passHref href={`${view}${count}`}>
          <Tooltip title="View record">
            <PageviewIcon />
          </Tooltip>
        </Link>
      </Grid>
      <Grid item alignSelf="center">
        <Link key="2" passHref href={`/forms/editForm/${count}`}>
          <Tooltip title="Edit record">
            <ModeEditIcon />
          </Tooltip>
        </Link>
      </Grid>
      <Grid item alignSelf="center">
        <Link key="3" passHref href={`/general/search/${count}`}>
          <Tooltip title="Search related records">
            <AccountCircleIcon />
          </Tooltip>
        </Link>
      </Grid>
    </Grid>
  );
}
