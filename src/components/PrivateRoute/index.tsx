import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUser } from 'context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { data } = useUser();

  const routeComponent = () =>
    data ? <Component {...rest} /> : <Redirect to={{ pathname: '/login' }} />;
  return <Route {...rest} render={routeComponent} />;
};

export default PrivateRoute;
