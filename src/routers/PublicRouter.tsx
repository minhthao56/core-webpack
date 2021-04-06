import React from "react";
import { Route, useLocation } from "react-router-dom";

export const PublicRouter: React.FC<IPublicRouter> = ({
  component: Component,
  layout: Layout,
  exact,
  path,
  header: Header,
  footer: Footer,
  isHasFooter,
  isHasHeader,
  titleHeader,
  typeHeader,
}) => {
  let query = new URLSearchParams(useLocation().search).get("text");
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        return (
          <Layout
            header={
              isHasHeader ? (
                <Header
                  title={titleHeader}
                  titleDynamic={query}
                  type={typeHeader}
                  onClick={props.history.goBack}
                />
              ) : (
                <></>
              )
            }
            footer={isHasFooter ? <Footer /> : <></>}
          >
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};
