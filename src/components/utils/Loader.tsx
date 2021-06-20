import React, { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loaderOuter: {
      position: "fixed",
      top: 0,
      left: 0,
      width: `100%`,
      height: `100%`,
      backgroundColor: `#fff`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    loader: {
      position: "relative",
      width: 60,
      height: 60,
      borderRadius: 60,
    },
    outer: {
      position: "absolute",
      border: `4px solid ${theme.palette.primary.main}`,
      borderLeftColor: `transparent`,
      borderBottom: 0,
      width: `100%`,
      height: `100%`,
      top: 0,
      left: 0,
      borderRadius: `50%`,
      animation: `$outer 1s ${theme.transitions.easing.easeInOut} infinite`,
    },
    inner: {
      position: "absolute",
      border: `4px solid ${theme.palette.primary.light}`,
      borderBottomColor: `transparent`,
      borderRight: 0,
      width: 40,
      height: 40,
      left: `calc(50% - 20px)`,
      top: `calc(50% - 20px)`,
      borderRadius: `50%`,
      animation: `$inner 1s ${theme.transitions.easing.easeInOut} infinite`,
    },
    "@keyframes outer": {
      "0%": {
        transform: `rotate(0deg)`,
      },
      "100%": {
        transform: `rotate(360deg)`,
      },
    },
    "@keyframes inner": {
      "0%": {
        transform: `rotate(0deg)`,
      },
      "100%": {
        transform: `rotate(-360deg)`,
      },
    },
  })
);

const Loader: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.loaderOuter}>
      <div className={classes.loader}>
        <div className={classes.outer}></div>
        <div className={classes.inner}></div>
      </div>
    </div>
  );
};

export default Loader;
