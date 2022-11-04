import * as React from "react";

import { alpha, styled } from "@mui/material/styles";
import { signOut, useSession } from "next-auth/react";

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

const StyledMenu = styled((props) => <Menu {...props} />)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 150,
    padding: 0,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: 0, // Root cause of the white border of the menu
      color: "#001011",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const Navbar = () => {
  const { status } = useSession();
  const day = new Date();
  const today = React.useRef(
    day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate()
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const openGeneral = Boolean(anchorEl);
  const openGeneral2 = Boolean(anchorEl2);
  const openGeneral3 = Boolean(anchorEl3);
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
  const handleClose3 = () => {
    setAnchorEl3(null);
  };
  const styleOfMenuItem = {
    display: "block",
    color: "#F0F3BD",
    background: "#001011",
    zIndex: 1700,
  };
  const styleOfMenuList = {
    color: "#001011",
    background: "#001011",
    zIndex: 1000,
  };
  const styleOfMenu = {
    display: "block",
    color: "#001011",
    zIndex: 1600,
  };

  return (
    <AppBar
      position="sticky"
      style={{ minHeight: "60px", maxHeight: "5vh", background: "#001011" }}
    >
      <Container
        maxWidth="xl"
        sx={{ minHeight: "5vh", maxHeight: "5vh", alignItems: "center" }}
      >
        <Toolbar disableGutters>
          <Link href={"/"} passHref>
            <Button sx={{ minWidth: "190px" }}>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs={3}>
                  <Box sx={{ pt: 1 }}>
                    <Image
                      src="/favicon.ico"
                      alt="logo"
                      height="50"
                      width="50"
                    />
                  </Box>
                </Grid>
                <Grid item xs={9} sx={{ display: "block" }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "white", display: "block" }}
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
              display: {
                display: "flex",
                justifyContent: "right",
                gap: "1vw",
              },
            }}
          >
            <Button
              sx={styleOfMenuItem}
              id="basic-button3"
              aria-controls={openGeneral3 ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openGeneral3 ? "true" : undefined}
              onMouseOver={handleClick3}
            >
              Message
            </Button>
            <Button
              sx={styleOfMenuItem}
              id="basic-button"
              aria-controls={openGeneral ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openGeneral ? "true" : undefined}
              onMouseOver={handleClick}
            >
              General CT
            </Button>
            <Button
              sx={styleOfMenuItem}
              id="basic-button2"
              aria-controls={openGeneral2 ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openGeneral2 ? "true" : undefined}
              onMouseOver={handleClick2}
            >
              Cardiac CT
            </Button>
            {status === "authenticated" ? (
              <Button
                variant="contained"
                id="logout-button"
                onClick={() => signOut({ redirect: false })}
              >
                Sign Out
              </Button>
            ) : (
              <Button variant="contained" onClick={(e) => e.preventDefault()}>
                <Link href={`/sign-in`} replace>
                  <a>Sign In</a>
                </Link>
              </Button>
            )}
            <StyledMenu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openGeneral}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              onMouseLeave={handleClose2}
              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
            >
              <MenuList sx={styleOfMenuList}>
                <MenuItem sx={styleOfMenuItem}>
                  <Link
                    key="/general/logform"
                    href="/general/logform"
                    replace
                    passHref
                  >
                    <a>Log Form</a>
                  </Link>
                </MenuItem>
                <MenuItem sx={styleOfMenuItem}>
                  <Link
                    key="/general/table"
                    href="/general/table"
                    replace
                    passHref
                  >
                    <a>Table</a>
                  </Link>
                </MenuItem>
                <MenuItem sx={styleOfMenuItem}>
                  <Link
                    key="/general/search"
                    href="/general/search"
                    replace
                    passHref
                  >
                    <a>Search</a>
                  </Link>
                </MenuItem>
                <MenuItem sx={styleOfMenuItem}>
                  <Link
                    href={`/general/today/${today.current}`}
                    replace
                    passHref
                    key="/general/today"
                  >
                    <a>Today case</a>
                  </Link>
                </MenuItem>
                <MenuItem sx={styleOfMenuItem}>
                  <Link href={`/general/ttpcalculator`} replace passHref>
                    <a>TTP calculator</a>
                  </Link>
                </MenuItem>
              </MenuList>
            </StyledMenu>
            <StyledMenu
              id="basic-menu2"
              anchorEl={anchorEl2}
              open={openGeneral2}
              onClose={handleClose2}
              sx={styleOfMenu}
              MenuListProps={{ onMouseLeave: handleClose2 }}
              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
            >
              <MenuList onMouseLeave={handleClose2} sx={styleOfMenuItem}>
                <MenuItem sx={styleOfMenuItem}>
                  <Link href="/cardiac/protocol/setup" replace passHref>
                    <a>Case Setup</a>
                  </Link>
                </MenuItem>
                <MenuItem sx={styleOfMenuItem}>
                  <Link href="/cardiac/table" replace passHref>
                    <a>Table</a>
                  </Link>
                </MenuItem>
                <MenuItem sx={styleOfMenuItem}>
                  <Link href="/cardiac/search" replace passHref>
                    <a>Search</a>
                  </Link>
                </MenuItem>
              </MenuList>
            </StyledMenu>
            <StyledMenu
              id="basic-menu3"
              anchorEl={anchorEl3}
              open={openGeneral3}
              onClose={handleClose3}
              sx={styleOfMenu}
              MenuListProps={{ onMouseLeave: handleClose3 }}
              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
            >
              <MenuList onMouseLeave={handleClose3} sx={styleOfMenuItem}>
                <MenuItem sx={styleOfMenuItem}>
                  <Link href="/message" passHref>
                    <a>Message Board</a>
                  </Link>
                </MenuItem>
                {status === "authenticated" ? (
                  <MenuItem sx={styleOfMenuItem}>
                    <Link href="/message/form" passHref>
                      <a>Create New Message</a>
                    </Link>
                  </MenuItem>
                ) : null}
              </MenuList>
            </StyledMenu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
