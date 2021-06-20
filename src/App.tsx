import React from "react";
import "./App.css";
import { Login } from "./screens/Login";
import {
  createMuiTheme,
  Grid,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import TabPanel from "../src/components/TabPanel";
import Appbar from "../src/components/AppBar";
import ListPage from "../src/screens/ListPage";
import realm from "./services/realm";
import ComboForm from "./screens/ComboForm";
import Loader from "./components/utils/Loader";
import { deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    "& *": {
      boxSizing: `border-box`,
    },
  },
});

function App() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: deepPurple.A700,
        dark: deepPurple[900],
        light: deepPurple[400],
      },
    },
  });
  const renderMarkUp = () => {
    if (realm.currentUser?.isLoggedIn) {
      return (
        <Grid container>
          <Appbar {...{ handleChange, value }} />
          <TabPanel value={value} index={0}>
            <ComboForm />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ListPage />
          </TabPanel>
          <TabPanel value={value} index={2}>
            empty item
          </TabPanel>
        </Grid>
      );
    }

    return <Login />;
  };
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>{renderMarkUp()}</div>
    </ThemeProvider>
  );
}

export default App;
