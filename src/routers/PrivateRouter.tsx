import React, { useEffect } from "react";
import { useLocation, Route } from "react-router-dom";
// import { doGetCurrentUser } from '../redux/slice';
// import { EToken } from '../constants/login';
// import { logout } from '../helpers/app';
// import { readCookie } from '../helpers/login';
// import { RootState } from '../redux/reducers/rootReducers';
import { useAppDispatch } from "../redux/store";

export const PrivateRouter: React.FC<IPrivateRouter> = ({
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
  isHasGradiant,
  backPath,
  withoutAvatar,
}) => {
  const dispatch = useAppDispatch();

  // const tokenCareer = window.localStorage.getItem(EToken.CAREER_GUIDANCE_ACCESS_KEY);
  // const tokenComunity = window.localStorage.getItem(EToken.COMUNITY_ACCESS_KEY);
  // const errorCurrentUser = useSelector((state: RootState) => state.user.err.response?.status);
  // const titleRedux = useSelector((state: RootState) => state.header.title);

  // useEffect(() => {
  //   dispatch(doGetCurrentUser());
  // }, []);

  // let query = new URLSearchParams(useLocation().search).get('text');

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        // if (
        //   !tokenCareer ||
        //   !tokenComunity ||
        //   !readCookie(EToken.CAREER_GUIDANCE_ACCESS_KEY) ||
        //   !readCookie(EToken.COMUNITY_ACCESS_KEY)
        // ) {
        //   logout();
        // }

        // if (errorCurrentUser === 401) {
        //   logout();
        // }

        return (
          <Layout
            header={
              isHasHeader ? (
                <Header
                  title={titleHeader}
                  // titleDynamic={query}
                  type={typeHeader}
                  onClick={props.history.goBack}
                  path={backPath}
                  // titleRedux={titleRedux}
                  withoutAvatar={withoutAvatar}
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
