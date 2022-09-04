import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MenuList } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { maxHeight } from "@mui/system";

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
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const openGeneral = Boolean(anchorEl);
  const openGeneral2 = Boolean(anchorEl2);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const styleOfMenuItem = {
    display: "block",
    color: "#F0F3BD",
    background: "#001011",
  };
  const styleOfMenuList = {
    p: 0,
  };
  const styleOfMenu = { display: "flex", color: "#001011" };

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
            <Button
              sx={styleOfMenuItem}
              id="basic-button"
              aria-controls={openGeneral ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openGeneral ? "true" : undefined}
              onClick={handleClick}
            >
              General CT
            </Button>
            <Button
              sx={styleOfMenuItem}
              id="basic-button2"
              aria-controls={openGeneral2 ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openGeneral2 ? "true" : undefined}
              onClick={handleClick2}
            >
              Cardiac CT
            </Button>
            <Button sx={styleOfMenuItem} onClick={(e) => e.preventDefault()}>
              <Link href={`/today/${today}`} replace>
                <a>Today cases</a>
              </Link>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openGeneral}
              onClose={handleClose}
              sx={styleOfMenu}
            >
              <MenuList sx={styleOfMenuList}>
                <MenuItem sx={styleOfMenuItem}>
                  <Link href="/general/logform" passHref>
                    <a>Log Form</a>
                  </Link>
                </MenuItem>
                <MenuItem sx={styleOfMenuItem}>
                  <Link href="/general/table" passHref>
                    <a>Table</a>
                  </Link>
                </MenuItem>
                <MenuItem sx={styleOfMenuItem}>
                  <Link href="/general/search" passHref>
                    <a>Search</a>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu
              id="basic-menu2"
              anchorEl={anchorEl2}
              open={openGeneral2}
              onClose={handleClose2}
              sx={styleOfMenu}
            >
              <MenuList sx={styleOfMenuItem}>
                <MenuItem sx={styleOfMenuItem}>
                  <Link href="/cardiac/protocol/setup" passHref>
                    <a>Case Setup</a>
                  </Link>
                </MenuItem>
                <MenuItem sx={styleOfMenuItem}>
                  <Link href="/Table" passHref>
                    <a>Table</a>
                  </Link>
                </MenuItem>
                <MenuItem sx={styleOfMenuItem}>
                  <Link href="/cardiac" passHref>
                    <a>Search</a>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
