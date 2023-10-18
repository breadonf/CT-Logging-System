import * as React from "react";

import PopupState, { bindHover, bindMenu } from "material-ui-popup-state";
import { signOut, useSession } from "next-auth/react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HoverMenu from "material-ui-popup-state/HoverPopover";
import Image from "next/image";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// const StyledMenu = styled((props) => <Menu {...props} />)(({ theme }) => ({
//   "& .MuiPaper-root": {
//     borderRadius: 6,
//     marginTop: theme.spacing(1),
//     minWidth: 150,
//     padding: 0,
//     boxShadow:
//       "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
//     "& .MuiMenu-list": {
//       padding: 0, // Root cause of the white border of the menu
//       color: "#001011",
//     },
//     "& .MuiMenuItem-root": {
//       "& .MuiSvgIcon-root": {
//         fontSize: 18,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5),
//       },
//       "&:active": {
//         backgroundColor: alpha(
//           theme.palette.primary.main,
//           theme.palette.action.selectedOpacity
//         ),
//       },
//     },
//   },
// }));

const Navbar = () => {
  const { status } = useSession();
  const day = new Date();
  const today = React.useRef(
    day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate()
  );

  const styleOfMenuItem = {
    color: "#F0F3BD",
    background: "#001011",
  };
  const styleOfMenuList = {
    color: "#001011",
    background: "#001011",
  };
  const styleOfMenu = {
    color: "#001011",
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
            <PopupState variant="popover" popupId="MessageMenu">
              {(popupState) => (
                <>
                  <Button sx={styleOfMenuItem} {...bindHover(popupState)}>
                    Message
                  </Button>
                  <HoverMenu
                    {...bindMenu(popupState)}
                    sx={styleOfMenu}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <MenuList sx={styleOfMenuList}>
                      <MenuItem onClick={popupState.close} sx={styleOfMenuItem}>
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
                  </HoverMenu>
                </>
              )}
            </PopupState>
            <PopupState variant="popover" popupId="GeneralCT">
              {(popupState) => (
                <div>
                  <Button
                    sx={styleOfMenuItem}
                    id="basic-button3"
                    {...bindHover(popupState)}
                  >
                    General CT
                  </Button>
                  <HoverMenu
                    {...bindMenu(popupState)}
                    sx={styleOfMenu}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <MenuList sx={styleOfMenuList}>
                      <MenuItem sx={styleOfMenuItem}>
                        <Link
                          key="/general/logform"
                          href="/general/logform"
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
                  </HoverMenu>
                </div>
              )}
            </PopupState>
            <PopupState variant="popover" popupId="CardiacCT">
              {(popupState) => (
                <div>
                  <Button
                    sx={styleOfMenuItem}
                    id="basic-button3"
                    {...bindHover(popupState)}
                  >
                    Cardiac CT
                  </Button>
                  <HoverMenu
                    {...bindMenu(popupState)}
                    sx={styleOfMenu}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <MenuList sx={styleOfMenuItem}>
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
                  </HoverMenu>
                </div>
              )}
            </PopupState>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
