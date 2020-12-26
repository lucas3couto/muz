import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
import AuthLayout from 'templates/auth';
import DefaultLayout from 'templates/default';

const RouteWrapper = ({ component: Component, isPrivate = false, title, ...rest }) => {
  const signed = true;
  // useSelector(state => state.auth.signed);

  if (!signed && isPrivate) {
    return <Redirect to="/entrar" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  const Layout = ({ children }) => {
    if (isPrivate) {
      return (
        <DefaultLayout title={title} {...rest}>
          {children}
        </DefaultLayout>
      );
    }
    return <AuthLayout>{children}</AuthLayout>;
  };

  Layout.propTypes = {
    children: PropTypes.element.isRequired,
  };

  return (
    <Route
      {...rest}
      render={props => (
        <Layout {...rest} title={title}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

RouteWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isPrivate: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
