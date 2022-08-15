import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";
import Brightness1TwoToneIcon from "@mui/icons-material/Brightness1TwoTone";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";

const Navbar = () => {
  const day = new Date();
  const [today, setToday] = React.useState(
    day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + (day.getDate() - 1)
  );
  const pages = [
    ["Forms", "Form"],
    ["Table", "Table"],
    ["Search", "Search"],
    ["Message", "Message"],
    ["cardiac", "cardiac"],
    ["cardiac/protocol/setup", "Cardiac Protocoling"],
    [`today/${today}`, "Today"],
  ];
  return (
    <AppBar
      position="static"
      style={{ minHeight: "5vh", background: "#001011" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href={"/"} passHref>
            <Button>
              <Brightness1TwoToneIcon />
              <AirlineSeatFlatIcon fontSize="medium" sx={{ mr: 2 }} />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { display: "flex", color: "white" } }}
              >
                Excel CT
              </Typography>
            </Button>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { display: "flex", justifyContent: "right" },
            }}
          >
            {pages.map((page) => (
              <Link href={`/${page[0]}`} passHref key={page}>
                <Button
                  key={page[1]}
                  sx={{
                    my: 2,
                    mx: 1,
                    display: "block",
                    color: "#F0F3BD",
                  }}
                >
                  {page[1]}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
