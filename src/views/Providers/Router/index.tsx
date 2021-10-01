import React from "react";
import { Router as ReactRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { Home } from "../../Pages/Home";
import { usePageRoute } from "./hooks";
import { page } from "./Page/";

const RouterProvider = () => {
  const { state } = usePageRoute();

  return (
    <ReactRouter history={state.history}>
      <Switch>
        <Route exact path={page.home.pathname} component={Home} />
      </Switch>
    </ReactRouter>
  );
};

export { RouterProvider };
