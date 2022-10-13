import * as React from "react";

import { getCsrfToken, signIn } from "next-auth/react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import WithPaperWrapper from "/components/Forms/WithPaperWrapper";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

function SignIn({ csrfToken }) {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email: event.target.email.value,
      password: event.target.password.value,
      callbackUrl: `/general/logform`,
    });

    if (res?.error) {
      toast.error(`${res.error}`, {
        style: {
          border: "1px solid #713200",
          padding: "40px",
          color: "#713200",
          fontSize: "1.5rem",
          minWidth: "20%",
        },
      });
    } else {
      router.push("/");
    }
  };

  return (
    <WithPaperWrapper>
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              type="hidden"
              name="csrfToken"
              defaultValue={csrfToken}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </WithPaperWrapper>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default SignIn;
