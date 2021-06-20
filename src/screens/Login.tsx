import React, { useState } from "react";
import "firebase/auth";
import "firebaseui/dist/firebaseui.css";
import {
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Box,
  SvgIconProps,
  InputAdornment,
  useTheme,
  withStyles,
  Typography,
  Theme,
} from "@material-ui/core";
import * as Realm from "realm-web";
import realm from "../services/realm";
import img from "../assets/photo-1529539795054-3c162aab037a.jpg";
const useStyles = makeStyles({
  img: {
    height: `100%`,
    width: `100%`,
    backgroundSize: "cover",
  },
  button: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});
const CustomField = withStyles((theme: Theme) => ({
  root: {
    "& input": {
      height: `auto`,
      padding: `20px 5px 10px`,
    },
    "& .MuiInputLabel-formControl": {
      top: -5,
    },
    "& .startAdornment": {
      marginTop: `10px !important`,
    },
  },
}))(TextField);
async function loginEmailPassword(email: string, password: string) {
  // Create an anonymous credential
  const credentials = Realm.Credentials.emailPassword(email, password);
  try {
    // Authenticate the user
    const user = await realm.logIn(credentials);
    window.location.reload();
    // `App.currentUser` updates to match the logged in user
    // assert(user.id === app.currentUser.id)
    return user;
  } catch (err) {
    console.error("Failed to log in", err);
  }
}

const UserIcon = (props: SvgIconProps) => {
  const theme = useTheme();
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <linearGradient
        id="a"
        gradientTransform="matrix(1 0 0 -1 0 -19430)"
        gradientUnits="userSpaceOnUse"
        x1={0}
        x2={512}
        y1={-19686}
        y2={-19686}
      >
        <stop offset={0} stopColor={theme.palette.primary.main} />
        <stop offset={1} stopColor={theme.palette.primary.dark} />
      </linearGradient>
      <path
        d="M512 256c0 141.387-114.613 256-256 256S0 397.387 0 256 114.613 0 256 0s256 114.613 256 256zm0 0"
        fill="url(#a)"
      />
      <path
        d="M314.203 247.938c23.516-17.711 38.75-45.852 38.75-77.489 0-53.457-43.492-96.949-96.953-96.949-53.457 0-96.95 43.492-96.95 96.95 0 31.636 15.231 59.777 38.747 77.488C134.836 271.57 89.902 332.382 89.902 403.5h30c0-75.047 61.055-136.098 136.102-136.098 75.043 0 136.098 61.051 136.098 136.098h30c-.004-71.117-44.934-131.93-107.899-155.563zm-125.152-77.489c0-36.918 30.031-66.949 66.949-66.949s66.95 30.031 66.95 66.95-30.032 66.952-66.95 66.952-66.95-30.035-66.95-66.953zm0 0"
        fill="#fff"
      />
    </svg>
  );
};

const PasswordIcon = (props: SvgIconProps) => {
  const theme = useTheme();
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <circle cx={256} cy={256} fill={theme.palette.primary.main} r={256} />
      <path
        d="M512 256c0-1.33-.03-2.652-.05-3.977L332.055 72.129S200 24 185 143s-50.474 283.974-50.474 283.974l82.329 82.049A257.87 257.87 0 00256 512c141.385 0 256-114.615 256-256z"
        fill={theme.palette.primary.dark}
      />
      <path
        d="M358.184 213.015h-40.609v-72.722c0-33.952-27.622-61.574-61.575-61.574s-61.575 27.622-61.575 61.574v72.722h-40.609v-72.722c0-56.344 45.84-102.184 102.184-102.184s102.184 45.839 102.184 102.184z"
        fill="#f4f2ef"
      />
      <path
        d="M358.18 140.29v72.73h-40.61v-72.73c0-33.95-27.62-61.57-61.57-61.57V38.11c56.34 0 102.18 45.84 102.18 102.18z"
        fill="#e5e1dc"
      />
      <path
        d="M330.412 446H181.588c-37.401 0-67.721-30.32-67.721-67.721V208.706h284.266v169.573c0 37.401-30.32 67.721-67.721 67.721z"
        fill="#ffc136"
      />
      <path
        d="M398.13 208.71v169.57c0 37.4-30.32 67.72-67.72 67.72H256V208.71z"
        fill="#f4a300"
      />
      <path
        d="M293.446 300.152c0-20.681-16.765-37.446-37.446-37.446s-37.446 16.765-37.446 37.446c0 13.99 7.677 26.179 19.042 32.608v61.93h36.807v-61.93c11.366-6.429 19.043-18.619 19.043-32.608z"
        fill="#655665"
      />
      <path
        d="M293.45 300.15c0 13.99-7.68 26.18-19.05 32.61v61.93H256V262.71c20.68 0 37.45 16.76 37.45 37.44z"
        fill="#493e49"
      />
    </svg>
  );
};

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const classes = useStyles();
  return (
    <Box p={4} style={{ height: `100vh` }}>
      <Grid container style={{ minHeight: `100%` }} component={Paper}>
        <Grid
          item
          direction="column"
          style={{ display: `flex` }}
          justify="center"
          alignItems="center"
          lg={6}
        >
          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h3">Sign In</Typography>
              <Typography variant="body1">
                Sign In and discover a great amount of new opportunities!
              </Typography>
            </Box>
            <Box width="100%" p={2}>
              <CustomField
                variant="filled"
                placeholder="Username"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment className="startAdornment" position="start">
                      <UserIcon height={20} width={20} />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box p={2}>
              <CustomField
                variant="filled"
                placeholder="Password"
                type={"password"}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment className="startAdornment" position="start">
                      <PasswordIcon height={20} width={20} />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setPass(e.target.value)}
              />
            </Box>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                fullWidth
                onClick={() => loginEmailPassword(email, pass)}
              >
                {" "}
                Login{" "}
              </Button>
            </Grid>
          </Paper>
        </Grid>
        <Grid item lg={6}>
          <img src={img} className={classes.img} alt="Cover Image" />
        </Grid>
      </Grid>
    </Box>
  );
};

export { Login };
