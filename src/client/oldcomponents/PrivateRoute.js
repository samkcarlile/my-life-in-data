import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';

function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = useStoreState((state) => state.user.isLoggedIn);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
