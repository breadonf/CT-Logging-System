import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";
import Brightness1TwoToneIcon from "@mui/icons-material/Brightness1TwoTone";

const pages = ["Forms", "Table", "Patient", "Exam", "Protocol"];

const Navbar = () => {
  return (
    <AppBar position="static" style={{ background: "#001011" }}>
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
              <Link href={`/${page}`} passHref key={page}>
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    mx: 1,
                    color: "white",
                    display: "block",
                    color: "#F0F3BD",
                  }}
                >
                  {page}
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
