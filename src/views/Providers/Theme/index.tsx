import React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import blue from "@mui/material/colors/blue";
import { yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: blue,
  },
});

export const ThemeProvider: React.FC = (props) => {
  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};
