import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home } from "../containers";
import { PrivateRouter } from "./PrivateRouter";
// import { PublicRouter } from "./PublicRouter";
import {
  BlankLayout,
  HeaderFooterLayout,
  OnlyFooterLayout,
  OnlyHeaderLayout,
} from "../layouts";

import { Header, Footer } from "../components";

export const Routers = () => {
  const buildysURL = process.env.REACT_APP_LINK_BUILDYS;

  return (
    <Router>
      <Switch>
        <PrivateRouter
          exact={true}
          path={"/"}
          component={Home}
          layout={HeaderFooterLayout}
          isHasHeader={true}
          header={Header}
          titleHeader="Cộng đồng"
          isHasFooter={true}
          footer={Footer}
        />
      </Switch>
    </Router>
  );
};
