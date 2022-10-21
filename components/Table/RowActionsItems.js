import { Button } from "@mui/material";
import Link from "next/link";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import PageviewIcon from "@mui/icons-material/Pageview";
import SearchIcon from "@mui/icons-material/Search";

//import { getHomepageCT, getHomepageCTNumber } from "../../queries/queries";
export function RowActionsItems({ row }) {
  const { count } = row.original;
  return (
    <>
      <Link key="1" passHref href={`/exam/${count}`}>
        <Button variant="text" startIcon={<PageviewIcon />}>
          View
        </Button>
      </Link>
      <Link key="2" passHref href={`/forms/editForm/${count}`}>
        <Button variant="text" startIcon={<ModeEditIcon />}>
          Edit
        </Button>
      </Link>
      <Link key="3" passHref href={`/general/search/${count}`}>
        <Button variant="text" startIcon={<SearchIcon />}>
          Search
        </Button>
      </Link>
    </>
  );
}
