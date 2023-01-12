import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({
    isAuthenticated,
    children
}) => {

    return isAuthenticated
        ? children  // Se va al DashboardRoutes, que es el hijo
        : <Navigate to="/Login" />
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}
