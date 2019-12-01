import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const isAuthenticated = true;

  if (isPrivate && !isAuthenticated){
    return <Redirect to="/login" />;
  }

  /*if (!isPrivate && isAuthenticated){
    return <Redirect to="/my-team" />;
  }*/

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
}