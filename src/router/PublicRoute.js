import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticated,
    children
}) => {

    return isAuthenticated
        ? <Navigate to="/panel" />
        : children  // Se va al Login, que es el hijo
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}