import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AUTH_TOKEN } from './constants';

export const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(renderProps) => {
        return localStorage.getItem(AUTH_TOKEN) ? (
          <Component {...renderProps} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};
