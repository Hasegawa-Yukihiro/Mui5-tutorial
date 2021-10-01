import * as React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "./views/Providers/Router";
import { ThemeProvider } from "./views/Providers/Theme";

ReactDOM.render(
  <ThemeProvider>
    <RouterProvider />
  </ThemeProvider>,
  document.getElementById("root")
);
