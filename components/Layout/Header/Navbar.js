import * as React from "react";

import { alpha, styled } from "@mui/material/styles";

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

const StyledMenu = styled((props) => <Menu elevation={1} {...props} />)(
  ({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 150,
      padding: 0,
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: 1,
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
  })
);

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
    zIndex: 1700,
  };
  const styleOfMenuList = {
    color: "#001011",
    background: "#001011",
  };
  const styleOfMenu = {
    display: "block",
    color: "#001011",
    zIndex: 1600,
  };

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
              display: {
                display: "flex",
                justifyContent: "right",
                gap: "1vw",
              },
            }}
          >
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
            <Button sx={styleOfMenuItem} onClick={(e) => e.preventDefault()}>
              <Link href={`/today/${today}`} replace>
                <a>Today cases</a>
              </Link>
            </Button>
            <StyledMenu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openGeneral}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              onMouseLeave={handleClose2}
              getContentAnchorEl={null}
              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
            >
              <MenuList sx={styleOfMenuList}>
                <MenuItem sx={styleOfMenuItem} disableRipple>
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
            </StyledMenu>
            <StyledMenu
              id="basic-menu2"
              anchorEl={anchorEl2}
              open={openGeneral2}
              onClose={handleClose2}
              sx={styleOfMenu}
              MenuListProps={{ onMouseLeave: handleClose2 }}
              getContentAnchorEl={null}
              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
            >
              <MenuList onMouseLeave={handleClose2} sx={styleOfMenuItem}>
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
            </StyledMenu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
