import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
const Navbar = () => {
  const day = new Date();
  const [today, setToday] = React.useState(
    day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate()
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <AppBar
      position="sticky"
      style={{ minHeight: "5vh", maxHeight: "5vh", background: "#001011" }}
    >
      <Container maxWidth="xl" sx={{ alignItems: "center" }}>
        <Toolbar disableGutters>
          <Link href={"/"} passHref>
            <Button sx={{ minWidth: "190px" }}>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs={2} sx={{ pt: 10 }}>
                  <Image src="/favicon.ico" alt="logo" width={50} height={50} />
                </Grid>
                <Grid item xs={9}>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ color: "white" }}
                  >
                    Excel CT
                  </Typography>
                </Grid>
              </Grid>
            </Button>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { display: "flex", justifyContent: "right" },
            }}
          >
            {pages.map((page) => (
              <Link href={`/${page[0]}`} passHref key={page[1]}>
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
