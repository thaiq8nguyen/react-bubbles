import React from "react";
import { Redirect, Route } from "react-router-dom";
import AuthService from "../utils/authServices";

const auth = new AuthService();

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
