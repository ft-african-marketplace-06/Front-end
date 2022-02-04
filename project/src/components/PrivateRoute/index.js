import React from "react";

import { Route, Redirect } from "react-router-dom";
export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          console.log('private route token get')
          return (<Component />);
        } else {
          console.log('private route token denied')
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
